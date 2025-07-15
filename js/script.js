lucide.createIcons();

const menuBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});

// Smooth animated heading logic
const words = ["Learn.", "Build.", "Collaborate."];
const element = document.getElementById("animatedHeading");
let wordIndex = 0;

function updateWord() {
    element.classList.remove("fade-slide");
    void element.offsetWidth; // trigger reflow
    element.classList.add("fade-slide");
    element.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}

setInterval(updateWord, 2500);
updateWord();
