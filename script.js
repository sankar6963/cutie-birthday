
const particleArea = document.getElementById("particles");

// Golden particles
for (let i = 0; i < 65; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDelay =
        Math.random() * 4 + "s";

    particle.style.animationDuration =
        (2 + Math.random() * 4) + "s";

    particleArea.appendChild(particle);
}


// SECTION 1: OPEN SURPRISE
const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", () => {

    document.getElementById("welcomeScreen")
        .classList.add("hidden");

    document.getElementById("balloonScreen")
        .classList.remove("hidden");

});



// SECTION 2: POP BALLOONS

const balloons = document.querySelectorAll(".balloon");

const messageBox = document.getElementById("balloonMessage");
const counter = document.getElementById("balloonCounter");
const continueBtn = document.getElementById("continueBtn");

let poppedCount = 0;

balloons.forEach((balloon) => {

    balloon.addEventListener("click", () => {

        if (balloon.classList.contains("popped")) {
            return;
        }

        // Get the balloon message
        const message = balloon.getAttribute("data-message");

        // Display the message
        messageBox.textContent = message;

        // Restart message animation
        messageBox.classList.remove("message-reveal");
        void messageBox.offsetWidth;
        messageBox.classList.add("message-reveal");

        // Pop balloon
        balloon.classList.add("popped");

        poppedCount++;

        // Update counter
        counter.textContent =
            poppedCount + " / 4 BALLOONS POPPED";

        // Show continue button after all balloons
        if (poppedCount === 4) {
            messageBox.textContent =
                "You are loved more than words can ever express, my Cutie! ❤️";

            continueBtn.classList.remove("hidden");
        }

    });

});


// SECTION 3: MOVE TO SPECIAL NUMBER

const numberScreen = document.getElementById("numberScreen");

continueBtn.addEventListener("click", () => {

    document.getElementById("balloonScreen")
        .classList.add("hidden");

    numberScreen.classList.remove("hidden");

    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
});

});


// REVEAL NUMBER 20

const revealNumberBtn =
    document.getElementById("revealNumberBtn");

const numberReveal =
    document.getElementById("numberReveal");

revealNumberBtn.addEventListener("click", () => {

    revealNumberBtn.classList.add("hidden");

    numberReveal.classList.remove("hidden");

    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
});

});


// CONTINUE TO NEXT SECTION


/* =================================
   SECTION 4 - YES OR NO QUESTIONS
================================= */

// Move from Section 3 to Section 4

document.getElementById("numberContinueBtn")
    .addEventListener("click", () => {

        numberScreen.classList.add("hidden");

        document.getElementById("questionScreen")
            .classList.remove("hidden");

        window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
});

    });


// Questions and their romantic messages

const questions = [

    {
        question: "Do you love me?",
        yes: "I knew it! You just made my day! I love you more than you can imagine, Cutie! ❤️",
        no: [
            "Oops! Wrong answer, Cutie! Try again! 😂",
            "Are you sure? My heart is waiting for a YES! 🥺",
            "I'll ask again with extra love! 😘"
        ]
    },

    {
        question: "Am I your favourite person?",
        yes: "And you're my favourite forever! No competition, no replacement! 🥰",
        no: [
            "Excuse me! Who is taking my place? 😂",
            "I'll try harder to become your favourite! ❤️",
            "Think again, my Cutie! 🙈"
        ]
    },

    {
        question: "Will you stay with me forever?",
        yes: "Forever sounds perfect with you! I want to grow old holding your hand. 💍❤️",
        no: [
            "My forever plan needs a little approval! 🥺",
            "I'll keep loving you until you say YES! 😂",
            "One more chance, my love! 💕"
        ]
    },

    {
        question: "Can I steal unlimited hugs and kisses?",
        yes: "Unlimited hugs and kisses reserved for you and me! Come here, Cutie! 😘💕",
        no: [
            "Okay, I'll start with just one hug! 😂",
            "How about unlimited hugs but no escape? 🙈",
            "My hug subscription is still waiting for approval! ❤️"
        ]
    }

];


// Elements

let currentQuestion = 0;
let noAttempts = 0;

const questionText = document.getElementById("questionText");
const questionNumber = document.getElementById("questionNumber");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const answerButtons = document.getElementById("answerButtons");
const answerMessage = document.getElementById("answerMessage");

const answerMessageText =
    document.getElementById("answerMessageText");

const nextQuestionBtn =
    document.getElementById("nextQuestionBtn");


// Display question

function showQuestion() {

    const item = questions[currentQuestion];

    questionNumber.textContent =
        `QUESTION ${currentQuestion + 1} OF ${questions.length}`;

    questionText.textContent = item.question;

    answerButtons.classList.remove("hidden");
    answerMessage.classList.add("hidden");
    nextQuestionBtn.classList.add("hidden");

    nextQuestionBtn.textContent =
        currentQuestion === questions.length - 1
        ? "CONTINUE TO OUR MEMORIES ✨"
        : "NEXT QUESTION 💕";

    noAttempts = 0;

}


// YES button

yesBtn.addEventListener("click", () => {

    const item = questions[currentQuestion];

    answerMessageText.textContent = item.yes;

    answerButtons.classList.add("hidden");

    answerMessage.classList.remove("hidden");

    nextQuestionBtn.classList.remove("hidden");

});


// NO button

noBtn.addEventListener("click", () => {

    const item = questions[currentQuestion];

    const responses = item.no;

    answerMessageText.textContent =
        responses[noAttempts % responses.length];

    noAttempts++;

    answerMessage.classList.remove("hidden");

});


// Next question button

nextQuestionBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    
} else {

    document.getElementById("questionScreen")
        .classList.add("hidden");

    document.getElementById("memoriesScreen")
        .classList.remove("hidden");

    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
});

}


});



// =================================
// SECTION 5 - PHOTO LIGHTBOX
// =================================

const photoCards = document.querySelectorAll(".photo-card");

const photoLightbox =
    document.getElementById("photoLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const closeLightbox =
    document.getElementById("closeLightbox");

photoCards.forEach((card) => {

    card.addEventListener("click", () => {

        const image = card.querySelector("img");
        const caption = card.querySelector("p");

        lightboxImage.src = image.src;
        lightboxCaption.textContent = caption.textContent;

        photoLightbox.classList.remove("hidden");

    });

});

closeLightbox.addEventListener("click", () => {

    photoLightbox.classList.add("hidden");

    lightboxImage.src = "";

});

photoLightbox.addEventListener("click", (event) => {

    if (event.target === photoLightbox) {

        photoLightbox.classList.add("hidden");

        lightboxImage.src = "";

    }

});

// Start romantic background music after the first user interaction
const birthdayMusic = document.getElementById("birthdayMusic");

document.addEventListener("click", function startBirthdayMusic() {
    birthdayMusic.play().catch(error => {
        console.log("Music playback could not start:", error);
    });
}, { once: true });


// Navigate from memories to birthday cake
document.getElementById("memoriesContinueBtn").addEventListener("click", function () {
    document.getElementById("memoriesScreen").classList.add("hidden");
    document.getElementById("cakeScreen").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Blow out an individual candle
function blowCandle(candle) {
    const flame = candle.querySelector(".flame");
    if (flame) {
        flame.style.display = "none";
    }
}

// Make a birthday wish
document.getElementById("wishButton").addEventListener("click", function () {
    document.querySelectorAll(".flame").forEach(function (flame) {
        flame.style.display = "none";
    });

    this.classList.add("hidden");
    document.getElementById("wishMessage").classList.remove("hidden");
    document.getElementById("cakeContinueBtn").classList.remove("hidden");
});

// Temporary next-section message
document.getElementById("cakeContinueBtn").addEventListener("click", function () {
    // Move from birthday cake to celebration
document.getElementById("cakeContinueBtn").addEventListener("click", function () {
    document.getElementById("cakeScreen").classList.add("hidden");
    document.getElementById("celebrationScreen").classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
    startBirthdayCelebration();
});
});

// Birthday celebration effects

function startBirthdayCelebration() {
    const container = document.getElementById("confettiContainer");
    container.innerHTML = "";

    // Create falling golden confetti
    const confettiColors = ["#f5d77b", "#ffffff", "#e8a6b8", "#d4af37"];

    for (let i = 0; i < 100; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";

        piece.style.left = Math.random() * 100 + "%";
        piece.style.backgroundColor =
            confettiColors[Math.floor(Math.random() * confettiColors.length)];

        piece.style.animationDuration = (3 + Math.random() * 4) + "s";
        piece.style.animationDelay = (Math.random() * 2) + "s";

        container.appendChild(piece);
    }

    // Create colorful firework bursts
    for (let i = 0; i < 8; i++) {
        setTimeout(createFirework, i * 450);
    }
}

function createFirework() {
    const screen = document.getElementById("celebrationScreen");

    const centerX = 10 + Math.random() * 80;
    const centerY = 15 + Math.random() * 55;

    const colors = ["#f5d77b", "#ff7eb3", "#ffffff", "#ffae42"];

    for (let i = 0; i < 18; i++) {
        const spark = document.createElement("span");
        spark.className = "firework";

        spark.style.left = centerX + "%";
        spark.style.top = centerY + "%";
        spark.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        const angle = (Math.PI * 2 * i) / 18;
        const distance = 35 + Math.random() * 55;

        spark.style.setProperty("--x", Math.cos(angle) * distance + "px");
        spark.style.setProperty("--y", Math.sin(angle) * distance + "px");

        screen.appendChild(spark);

        setTimeout(() => spark.remove(), 1300);
    }
}

// Replay the celebration
document.getElementById("celebrateAgainBtn").addEventListener("click", function () {
    startBirthdayCelebration();
});

document.getElementById("cakeContinueBtn").addEventListener("click", function () {
    document.getElementById("cakeScreen").classList.add("hidden");
    document.getElementById("letterScreen").classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Open the birthday letter
document.getElementById("envelopeBtn").addEventListener("click", function () {
    document.getElementById("loveLetter").classList.remove("hidden");
    this.classList.add("hidden");

    document.getElementById("letterContinueBtn").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("loveLetter").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 200);
});

// Temporary next-section message
document.getElementById("letterContinueBtn").addEventListener("click", function () {
    // Move from birthday letter to surprise gift
document.getElementById("letterContinueBtn").addEventListener("click", function () {
    document.getElementById("letterScreen").classList.add("hidden");
    document.getElementById("giftScreen").classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
});
});

// Open the surprise gift
document.getElementById("giftBoxBtn").addEventListener("click", function () {

    // Prevent opening more than once
    if (this.classList.contains("opened")) return;

    this.classList.add("opened");

    document.getElementById("giftTapHint").classList.add("hidden");

    // Reveal the surprise after the lid animation
    setTimeout(function () {
        document.getElementById("giftReveal").classList.remove("hidden");
        document.getElementById("giftContinueBtn").classList.remove("hidden");

        document.getElementById("giftReveal").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 900);
});

// Temporary final-section navigation
document.getElementById("giftContinueBtn").addEventListener("click", function () {
    // Move from surprise gift to final closing screen
document.getElementById("giftContinueBtn").addEventListener("click", function () {
    document.getElementById("giftScreen").classList.add("hidden");
    document.getElementById("closingScreen").classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });

    startClosingAnimation();
});
});

// Final screen floating golden sparkles
function startClosingAnimation() {
    const container = document.getElementById("closingSparkles");
    container.innerHTML = "";

    const symbols = ["✦", "✨", "♡", "✧"];

    for (let i = 0; i < 35; i++) {
        const sparkle = document.createElement("span");

        sparkle.className = "closing-sparkle";
        sparkle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        sparkle.style.left = Math.random() * 100 + "%";
        sparkle.style.fontSize = (12 + Math.random() * 18) + "px";
        sparkle.style.animationDuration = (5 + Math.random() * 6) + "s";
        sparkle.style.animationDelay = (Math.random() * 5) + "s";

        container.appendChild(sparkle);
    }
}

// Replay the complete birthday website
document.getElementById("replayBirthdayBtn").addEventListener("click", function () {
    window.location.reload();
});