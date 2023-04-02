// Scroll to top button
const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Mobile menu
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navList = document.querySelector("nav ul");

mobileMenuBtn.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Beat player
const beats = document.querySelectorAll(".beat");
const audioPlayer = document.querySelector("#audio-player");
const audioSource = document.querySelector("#audio-source");
const beatTitle = document.querySelector("#beat-title");

beats.forEach((beat) => {
  beat.addEventListener("click", () => {
    const audioFile = beat.getAttribute("data-audio");
    const title = beat.querySelector("h3").textContent;
    audioSource.setAttribute("src", audioFile);
    audioPlayer.load();
    audioPlayer.play();
    beatTitle.textContent = title;
  });
});