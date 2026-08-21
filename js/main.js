/* ==================================================
   OUR UNIVERSE
   MAIN JAVASCRIPT
================================================== */


/* ==================================================
   ELEMENT REFERENCES
================================================== */

const startJourney =
    document.getElementById("startJourney");

const openingLetter =
    document.getElementById("openingLetter");

const continueToMemories =
    document.getElementById("continueToMemories");

const memories =
    document.getElementById("memories");

const reasons =
    document.getElementById("reasons");

const timelineSection =
    document.getElementById("timeline");

const gallerySection =
    document.getElementById("gallery");

const hiddenSection =
    document.getElementById("hidden");

const finalMessage =
    document.getElementById("finalMessage");

const endingSection =
    document.getElementById("ending");



/* ==================================================
   1. BACKGROUND MUSIC
================================================== */

const backgroundMusic =
    document.getElementById("backgroundMusic");


const musicTracks = {

    opening:
        "assets/music/opening/opening.m4a",

    timeline:
        "assets/music/timeline/timeline.m4a",

    gallery:
        "assets/music/gallery/gallery.m4a",

    ending:
        "assets/music/ending/ending.m4a"

};


let currentMusic = "";



/* ==================================================
   CHANGE MUSIC
================================================== */

function changeMusic(trackName) {

    if (!backgroundMusic) {
        return;
    }


    const newMusic =
        musicTracks[trackName];


    if (!newMusic) {
        return;
    }


    if (
        currentMusic === trackName &&
        !backgroundMusic.paused
    ) {

        return;

    }


    backgroundMusic.pause();

    backgroundMusic.currentTime = 0;

    backgroundMusic.src = newMusic;

    backgroundMusic.loop = true;

    backgroundMusic.volume = 0.5;

    backgroundMusic.load();


    backgroundMusic.play()
        .then(() => {

            currentMusic =
                trackName;

            console.log(
                "Now playing:",
                trackName
            );

        })
        .catch((error) => {

            console.log(
                "Music waiting for interaction:",
                error
            );

        });

}



/* ==================================================
   2. COVER
   → OPENING MESSAGE
================================================== */

if (startJourney && openingLetter) {

    startJourney.addEventListener(
        "click",
        () => {

            /* START OPENING MUSIC */

            changeMusic("opening");


            /* MOVE TO OPENING LETTER */

            openingLetter.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}



/* ==================================================
   3. OPENING MESSAGE
   → VIDEOS
================================================== */

if (continueToMemories && memories) {

    continueToMemories.addEventListener(
        "click",
        () => {

            memories.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}



/* ==================================================
   4. FINAL MESSAGE
   → ENDING
================================================== */

const continueToEnding =
    document.getElementById("continueToEnding");


if (continueToEnding && endingSection) {

    continueToEnding.addEventListener(
        "click",
        () => {

            endingSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}



/* ==================================================
   5. GALLERY
   53 PHOTOS
================================================== */

const totalPhotos = 53;

let currentIndex = 1;


const galleryImage =
    document.getElementById("galleryImage");

const currentPhoto =
    document.getElementById("currentPhoto");

const prevPhoto =
    document.getElementById("prevPhoto");

const nextPhoto =
    document.getElementById("nextPhoto");

const galleryCaption =
    document.getElementById("galleryCaption");



/* ==================================================
   GALLERY CAPTIONS
================================================== */

const galleryCaptions = [

    "Tangan yang ingin selalu ku genggam.",
    "Selfie ditempat kita menyelesaikan masalah hehe.",
    "Pertama kali kita ke Puncak Lawang.",
    "Pertama kita ke Kebun Teh.",
    "Kalau dilihat kita mirip ya.",
    "Ceritanya habis nonton film di cafe.",
    "Sendalan habis darimana tuh hehe.",
    "Kamu,aku,dan kucing.",
    "Ini namanya, gaya nampak kuduak.",
    "Cemilan wajib di Jam Gadang.",
    "Kami sang pecinta Ramen.",
    "Ini makan versi akhir bulan hehe.",
    "Minuman favorit kalau ke Bukittiggi.",
    "Mengkeren dulu kami di cafe.",
    "Salah satu pose terbaik sih.",
    "Aku ganteng kan sayang ?.",
    "Bukan hanya spiderman yang bertarung, tetapi kami juga haha.",
    "Wajah-wajah penghuni surga.",
    "Lawang dengan cerita uniknya.",
    "Kamu ngak berat kok sayang.",
    "ini versi berhasil ya guys.",
    "Tengok lah, kita kali punya dunia nih.",
    "Singkarak punya cerita indah.",
    "Bukan hanya viewnya yang bagus, tetapi kamu juga.",
    "ala ala alay nih.",
    "Aku ganteng dan kamu cuanntiik bet.",
    "Foto yang hanya fadli boleh lihat.",
    "Foto yang hanya siti boleh lihat.",
    "Alam pun minder melihat indah mu.",
    "stttttt abang yang bayar.",
    "Salah satu foto terbaik sih.",
    "Maafkan apaik ya nonon.",
    "Intinya The Best nih foto.",
    "Kecek Siti, ado lawan?.",
    "Foto mama papa mu pas muda nih nak.",
    "Ternyata dia seniman guys.",
    "Ini nongkrong sehabis dari bandung.",
    "Terlihat siapa yang bayar haha.",
    "Couple terbaik se bioskop padang ko lah.",
    "Selfie lai , lanjo indak haha.",
    "Mumpung cantik, selfie lagi.",
    "Tetapi ini lah yang terbaik.",
    "Lulus apaik non.",
    "Alam iri dengan manja kita beb.",
    "Jamnya jadi kecil, karena yang besar cinta kita hehe.",
    "Ingatkah kamu cerita penemuan kaki itu ?.",
    "Pertama kali malming di batusangkar nih.",
    "Makan dirumah apaik.",
    "Dirumah apaik , seperti rumah sendiri.",
    "Hallo pak puliciii, apaik terjebak di hati nonon.",
    "Bibir manyun.",
    "I Love You Siti Inong.",
    "Thank you for being part of my universe."

];



/* ==================================================
   LOAD GALLERY IMAGE
================================================== */

function loadGalleryImage(number) {

    if (!galleryImage) {
        return;
    }

    const photoNumber =
        String(number).padStart(2, "0");

    const extensions = [
        ".jpg",
        ".JPG",
        ".jpeg",
        ".JPEG"
    ];

    let extensionIndex = 0;

    galleryImage.classList.add(
        "gallery-image-changing"
    );

    function tryLoadImage() {

        if (extensionIndex >= extensions.length) {

            console.error(
                `Gallery image ${photoNumber} tidak ditemukan.`
            );

            galleryImage.classList.remove(
                "gallery-image-changing"
            );

            return;
        }

        const imagePath =
            `assets/images/gallery/gallery${photoNumber}${extensions[extensionIndex]}`;

        extensionIndex++;

        galleryImage.src = imagePath;
    }

    galleryImage.onload = function () {

        galleryImage.classList.remove(
            "gallery-image-changing"
        );

    };

    galleryImage.onerror = function () {

        tryLoadImage();

    };

    tryLoadImage();


    if (currentPhoto) {

        currentPhoto.textContent =
            photoNumber;

    }


    if (galleryCaption) {

        galleryCaption.textContent =
            galleryCaptions[number - 1] ||
            galleryCaptions[0];

    }

}

/* ==================================================
   UPDATE GALLERY
================================================== */

function updateGallery() {

    loadGalleryImage(
        currentIndex
    );

}



/* ==================================================
   NEXT PHOTO
================================================== */

if (nextPhoto) {

    nextPhoto.addEventListener(
        "click",
        () => {

            currentIndex++;

            if (
                currentIndex >
                totalPhotos
            ) {

                currentIndex = 1;

            }

            updateGallery();

        }
    );

}



/* ==================================================
   PREVIOUS PHOTO
================================================== */

if (prevPhoto) {

    prevPhoto.addEventListener(
        "click",
        () => {

            currentIndex--;

            if (
                currentIndex < 1
            ) {

                currentIndex =
                    totalPhotos;

            }

            updateGallery();

        }
    );

}



/* ==================================================
   KEYBOARD GALLERY
================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key ===
            "ArrowRight"
        ) {

            currentIndex++;

            if (
                currentIndex >
                totalPhotos
            ) {

                currentIndex = 1;

            }

            updateGallery();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            currentIndex--;

            if (
                currentIndex < 1
            ) {

                currentIndex =
                    totalPhotos;

            }

            updateGallery();

        }

    }
);



/* ==================================================
   INITIAL GALLERY
================================================== */

if (galleryImage) {

    loadGalleryImage(1);

}



/* ==================================================
   6. HIDDEN MEMORY
================================================== */

const openSecret =
    document.getElementById("openSecret");

const hiddenContent =
    document.getElementById("hiddenContent");


if (
    openSecret &&
    hiddenContent
) {

    openSecret.addEventListener(
        "click",
        () => {

            hiddenContent.classList.add(
                "show"
            );


            openSecret.textContent =
                "The secret is open ♡";


            openSecret.disabled =
                true;


            hiddenContent.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

}



/* ==================================================
   7. SCROLL REVEAL
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const revealElements =
            document.querySelectorAll(
                ".scroll-reveal, .scroll-reveal-scale"
            );


        if (
            !revealElements.length
        ) {

            return;

        }


        const revealObserver =
            new IntersectionObserver(
                (
                    entries,
                    observer
                ) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach(
            (element) => {

                revealObserver.observe(
                    element
                );

            }
        );

    }
);



/* ==================================================
   8. MUSIC BASED ON SECTION
================================================== */

function updateMusicByScroll() {

    if (!backgroundMusic) {
        return;
    }


    const triggerPoint =
        window.innerHeight * 0.45;


    /*
       ENDING
    */

    if (endingSection) {

        const top =
            endingSection
                .getBoundingClientRect()
                .top;


        if (
            top <= triggerPoint
        ) {

            changeMusic("ending");

            return;

        }

    }


    /*
       GALLERY
    */

    if (gallerySection) {

        const top =
            gallerySection
                .getBoundingClientRect()
                .top;


        if (
            top <= triggerPoint
        ) {

            changeMusic("gallery");

            return;

        }

    }


    /*
       TIMELINE
    */

    if (timelineSection) {

        const top =
            timelineSection
                .getBoundingClientRect()
                .top;


        if (
            top <= triggerPoint
        ) {

            changeMusic("timeline");

            return;

        }

    }


    /*
       BEFORE TIMELINE

       COVER
       OPENING
       VIDEOS
       100 REASONS

       semuanya memakai
       OPENING MUSIC.
    */

    if (
        currentMusic !== "opening"
    ) {

        changeMusic("opening");

    }

}



/* ==================================================
   SCROLL MUSIC
================================================== */

window.addEventListener(
    "scroll",
    updateMusicByScroll,
    {
        passive: true
    }
);



/* ==================================================
   END
================================================== */
/* ==================================================
   100 REASONS
   CLICK TO REVEAL
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const reasonCards =
        document.querySelectorAll(".reason");


    if (!reasonCards.length) {
        return;
    }


    /* ==================================================
       CREATE MODAL
    ================================================== */

    const modal =
        document.createElement("div");

    modal.className =
        "reason-modal";


    modal.innerHTML = `

        <div class="reason-modal-box">

            <span class="reason-modal-number">
                REASON 01
            </span>

            <div class="reason-modal-heart">
                ♡
            </div>

            <p class="reason-modal-text">
                Karena bersamamu, aku merasa pulang
                ke tempat yang paling aman.
            </p>

            <button
                class="reason-modal-close"
                type="button">
                Close ♡
            </button>

        </div>

    `;


    document.body.appendChild(modal);


    /* ==================================================
       ELEMENTS
    ================================================== */

    const modalNumber =
        modal.querySelector(
            ".reason-modal-number"
        );


    const modalText =
        modal.querySelector(
            ".reason-modal-text"
        );


    const closeButton =
        modal.querySelector(
            ".reason-modal-close"
        );


    /* ==================================================
       OPEN REASON
    ================================================== */

    reasonCards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                const number =
                    card.querySelector(
                        "span"
                    );


                const text =
                    card.querySelector(
                        "p"
                    );


                if (!number || !text) {
                    return;
                }


                modalNumber.textContent =
                    `REASON ${number.textContent.trim()}`;


                modalText.textContent =
                    text.textContent.trim();


                modal.classList.add(
                    "show"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    });


    /* ==================================================
       CLOSE MODAL
    ================================================== */

    function closeReasonModal() {

        modal.classList.remove(
            "show"
        );


        document.body.style.overflow =
            "";

    }


    closeButton.addEventListener(
        "click",
        closeReasonModal
    );


    /* ==================================================
       CLICK OUTSIDE
    ================================================== */

    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === modal
            ) {

                closeReasonModal();

            }

        }
    );


    /* ==================================================
       ESC KEY
    ================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                closeReasonModal();

            }

        }
    );

});/* ==================================================
   100 REASONS
   INTERACTIVE MEMORY CARDS
================================================== */


/* ==================================================
   ALL 100 REASONS
================================================== */

const reasonsData = [

    "Karena bersamamu, aku merasa pulang ke tempat yang paling aman.",

    "Karena senyummu selalu punya cara untuk menceriakan hari terburukku.",

    "Karena pelukanmu adalah obat paling ampuh untuk semua lelahku.",

    "Karena kamu mencintaiku dengan segala kelebihan dan kekuranganku.",

    "Karena tatapan matamu selalu penuh dengan ketulusan.",

    "Karena amarahmu membuatku belajar menjadi lebih kuat.",

    "Karena kamu membuat kata \"cinta\" terasa lebih nyata dan sederhana.",

    "Karena aku menyukai caramu memanggilku dan menyebut namaku.",

    "Karena tawa kita bersama adalah suara favoritku di dunia.",

    "Karena berada di dekatmu saja sudah membuat hatiku tenang.",

    "Karena kamu selalu menjadi pendukung nomor satuku dalam setiap impianku.",

    "Karena kamu mau mendengarkan keluh kesahku tanpa menghakimi.",

    "Karena kamu selalu mempercayaiku, bahkan saat aku sedang meragukan diriku sendiri.",

    "Karena kita adalah tim yang hebat saat menghadapi masalah bersama.",

    "Karena kamu selalu memegang tanganku saat aku sedang ragu atau takut.",

    "Karena kamu mau belajar dan tumbuh bersama, melewati setiap fase kehidupan.",

    "Karena kamu selalu menghargai setiap usaha kecil yang kubuat.",

    "Karena kamu selalu ada, baik di masa-masa bahagia maupun saat-saat tersulit.",

    "Karena kamu tidak pernah menyerah pada hubungan kita ketika keadaan menjadi sulit.",

    "Karena bersamamu, tantangan yang berat terasa jauh lebih ringan.",

    "Karena kebaikan hatimu yang tulus.",

    "Karena kesabaranmu yang setipis tisu. 😂",

    "Karena selera humormu selalu cocok denganku, sampai kita bisa tertawa lepas bersama.",

    "Karena kamu memiliki pikiran yang dewasa dan menenangkan.",

    "Karena kamu selalu jujur dan terbuka dalam segala hal.",

    "Karena kerja keras dan kegigihanmu yang sangat menginspirasiku.",

    "Karena kamu tahu cara menghiburku tanpa perlu banyak kata.",

    "Karena sikap lembutmu saat berbicara denganku.",

    "Karena kamu adalah sosok yang bertanggung jawab.",

    "Karena kepribadianmu membuatku selalu merasa nyaman berada di dekatmu.",

    "Karena setiap perjalanan dan liburan bersamamu selalu penuh dengan cerita manis.",

    "Karena percakapan larut malam kita selalu terasa hangat dan mendalam.",

    "Karena kenangan indah yang telah kita ukir bersama tidak ada tandingannya.",

    "Karena caramu mengingat detail-detail kecil tentang diriku, bahkan yang sudah aku lupa.",

    "Karena momen-momen diam dan tenang bersamamu akan selalu aku ingat.",

    "Karena lelucon internal kita yang hanya kita berdua yang mengerti.",

    "Karena kejutan-kejutan kecil darimu yang selalu berhasil menyentuh hatiku.",

    "Karena momen-momen konyol yang kita lakukan bersama tanpa rasa malu.",

    "Karena setiap kencan singkat bersamamu selalu terasa spesial.",

    "Karena setiap foto dan kenangan bersama selalu berhasil membuatku tersenyum.",

    "Karena bersamamu, aku belajar menjadi pribadi yang jauh lebih sabar.",

    "Karena kamu selalu mendorongku untuk menjadi versi terbaik dari diriku.",

    "Karena bersamamu, aku belajar arti memaafkan dan memahami.",

    "Karena kamu mengajarkanku cara mencintai dengan lebih tulus.",

    "Karena bersamamu, sudut pandangku tentang dunia menjadi lebih indah.",

    "Karena kamu membuatku merasa berharga dan dicintai setiap hari.",

    "Karena kamu memberiku keberanian untuk mencoba hal-hal baru.",

    "Karena bersamamu, aku merasa berkembang secara emosional dan spiritual.",

    "Karena kamu mengajarkanku pentingnya saling berkompromi.",

    "Karena bersamamu, aku merasa menjadi orang yang lebih baik.",

    "Karena ekspresi wajahmu saat sedang sangat fokus.",

    "Karena caramu tertawa sampai matamu menyipit dan tawamu lepas begitu saja.",

    "Karena pesan singkat darimu di tengah hari yang selalu berhasil membuat hariku lebih cerah.",

    "Karena caramu menggenggam tanganku dengan erat.",

    "Karena kebiasaanmu mengingat hal-hal favoritku tanpa perlu diminta.",

    "Karena cara memasakmu, atau sekadar caramu menikmati makanan bersamaku.",

    "Karena aroma tubuhmu yang selalu menenangkan bagiku.",

    "Karena caramu mengusap kepalaku saat aku merasa lelah.",

    "Karena nada suaramu saat menyapa atau mengucapkan selamat pagi dan selamat malam.",

    "Karena antusiasmemu saat mendengarkan cerita-cerita konyolku.",

    "Karena aku tidak bisa membayangkan masa depanku tanpa dirimu di dalamnya.",

    "Karena bersamamu, membayangkan masa depan terasa begitu menyenangkan.",

    "Karena aku ingin menua bersamamu dan melihat rambut kita memutih.",

    "Karena kamu adalah orang pertama yang ingin kubagikan kabar bahagia.",

    "Karena aku ingin melewati segala musim kehidupan hanya bersamamu.",

    "Karena impian-impian kita saling melengkapi dengan begitu indah.",

    "Karena aku yakin kamu akan menjadi pasangan hidup dan orang tua yang luar biasa.",

    "Karena aku ingin terus belajar hal-hal baru bersamamu hingga puluhan tahun ke depan.",

    "Karena bersamamu, rumah bukan lagi sekadar sebuah tempat, melainkan dirimu.",

    "Karena perjalanan panjang kita di masa depan terasa aman bersamamu.",

    "Karena kamu adalah tempat curhat terbaik yang selalu siap mendengarkan.",

    "Karena bersamamu, aku merasa aman untuk membagikan rasa takut dan kerapuhanku.",

    "Karena kamu tahu cara membuatku tenang saat pikiranku sedang kacau.",

    "Karena kita bisa menghabiskan seharian tanpa melakukan apa-apa dan tetap merasa bahagia.",

    "Karena kita selalu belajar dari kesalahan kita.",

    "Karena kita bersama dan pernah berjanji untuk tetap memilih satu sama lain.",

    "Karena kamu tahu persis cara membuatku tersenyum di saat aku paling sedih.",

    "Karena di dekatmu, semua kekhawatiranku perlahan menghilang.",

    "Karena kedamaian yang kurasakan setiap kali selesai menghabiskan waktu bersamamu.",

    "Karena bersamamu, aku tidak perlu takut dinilai buruk.",

    "Karena ternyata kita punya banyak kesamaan dalam berbagai hal.",

    "Karena kamu selalu menghargai pendapatku, meskipun kita memiliki pandangan yang berbeda.",

    "Karena kita bisa saling melengkapi dalam kekurangan masing-masing.",

    "Karena caramu melihatku dengan hatimu.",

    "Karena kita suka jajan. 😂",

    "Karena kamu tidak hanya menjadi pasanganku, tetapi juga sahabat terbaikku.",

    "Karena kita bisa saling bercanda tanpa ada yang merasa tersinggung.",

    "Karena kita tahu kapan harus serius dan kapan waktunya bersenang-senang.",

    "Karena batas untuk saling menghargai dan menghormati di antara kita selalu terjaga.",

    "Karena energi positif yang selalu kamu bawa ke dalam hubungan kita.",

    "Karena kamu selalu memastikan aku sudah makan dan beristirahat dengan baik.",

    "Karena ucapan \"syuwinyiiii\" kita. ❤️",

    "Karena caramu menunjukkan rasa bangga memilikiku di depan orang-orang terdekatmu.",

    "Karena keberadaanmu membuat hal-hal biasa terasa luar biasa.",

    "Karena kamu selalu menjadi salah satu alasan utamaku untuk tersenyum hari ini.",

    "Karena kamu menerima masa laluku dan memilih untuk melihat masa depan kita.",

    "Karena kamu membuat hari-hari biasa terasa seperti perayaan kecil.",

    "Karena dari sekian banyak orang di dunia, hatiku memilihmu.",

    "Karena setiap hari bersamamu adalah anugerah yang selalu kusebut dalam doa.",

    "Dan yang paling utama: sederhana, karena aku mencintaimu—kemarin, hari ini, dan esok nanti."

];


/* ==================================================
   ELEMENTS
================================================== */

const reasonCards =
    document.querySelectorAll(".reason-card");

const reasonModal =
    document.getElementById("reasonModal");

const reasonModalClose =
    document.getElementById("reasonModalClose");

const reasonModalNumber =
    document.getElementById("reasonModalNumber");

const reasonModalText =
    document.getElementById("reasonModalText");

const reasonProgress =
    document.getElementById("reasonProgress");

const reasonPrev =
    document.getElementById("reasonPrev");

const reasonNext =
    document.getElementById("reasonNext");

const reasonModalBackdrop =
    document.querySelector(".reason-modal-backdrop");

const reasonChapters =
    document.querySelectorAll(".reason-chapter");


let currentReason = 1;


/* ==================================================
   FORMAT NUMBER
================================================== */

function formatReasonNumber(number) {

    return String(number).padStart(2, "0");

}


/* ==================================================
   OPEN REASON
================================================== */

function openReason(number) {

    if (!reasonModal) {
        return;
    }


    currentReason = number;


    reasonModalNumber.textContent =
        formatReasonNumber(number);


    reasonModalText.textContent =
        reasonsData[number - 1];


    reasonProgress.textContent =
        `${formatReasonNumber(number)} / 100`;


    reasonPrev.disabled =
        number <= 1;


    reasonNext.disabled =
        number >= 100;


    reasonModal.classList.add("open");

    reasonModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


/* ==================================================
   CLOSE REASON
================================================== */

function closeReason() {

    if (!reasonModal) {
        return;
    }


    reasonModal.classList.remove("open");

    reasonModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* ==================================================
   CARD CLICK
================================================== */

reasonCards.forEach((card) => {

    card.addEventListener(
        "click",
        () => {

            const number =
                Number(
                    card.dataset.number
                );


            openReason(number);

        }
    );

});


/* ==================================================
   CLOSE BUTTON
================================================== */

if (reasonModalClose) {

    reasonModalClose.addEventListener(
        "click",
        closeReason
    );

}


/* ==================================================
   BACKDROP CLICK
================================================== */

if (reasonModalBackdrop) {

    reasonModalBackdrop.addEventListener(
        "click",
        closeReason
    );

}


/* ==================================================
   NEXT
================================================== */

if (reasonNext) {

    reasonNext.addEventListener(
        "click",
        () => {

            if (
                currentReason < 100
            ) {

                openReason(
                    currentReason + 1
                );

            }

        }
    );

}


/* ==================================================
   PREVIOUS
================================================== */

if (reasonPrev) {

    reasonPrev.addEventListener(
        "click",
        () => {

            if (
                currentReason > 1
            ) {

                openReason(
                    currentReason - 1
                );

            }

        }
    );

}


/* ==================================================
   KEYBOARD
================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !reasonModal ||
            !reasonModal.classList.contains("open")
        ) {

            return;

        }


        if (event.key === "Escape") {

            closeReason();

        }


        if (event.key === "ArrowRight") {

            if (currentReason < 100) {

                openReason(
                    currentReason + 1
                );

            }

        }


        if (event.key === "ArrowLeft") {

            if (currentReason > 1) {

                openReason(
                    currentReason - 1
                );

            }

        }

    }
);


/* ==================================================
   CHAPTER FILTER
================================================== */

reasonChapters.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            reasonChapters.forEach(
                (item) => {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            const chapter =
                button.dataset.chapter;


            reasonCards.forEach(
                (card) => {

                    const cardChapter =
                        card.dataset.chapter;


                    /*
                       ALL
                    */

                    if (
                        chapter === "all"
                    ) {

                        card.classList.remove(
                            "reason-hidden"
                        );

                        return;

                    }


                    /*
                       CHAPTER
                    */

                    if (
                        cardChapter === chapter
                    ) {

                        card.classList.remove(
                            "reason-hidden"
                        );

                    } else {

                        card.classList.add(
                            "reason-hidden"
                        );

                    }

                }
            );

        }
    );

});


/* ==================================================
   END 100 REASONS
================================================== */

/* ==================================================
   SCROLL REVEAL
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(
        ".scroll-reveal"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

});