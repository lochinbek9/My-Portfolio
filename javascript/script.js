"use strict"

//================= Theme Light and Dark mode Site =================

const dayNight = document.querySelector(".day-night__icons");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark-mode");
})

//======================== Typing Animation ========================

var typed = new Typed(".typing", {
  strings: ["", "", "Web Desiginer", "Web Developer", "Graphic Designer", "YouTuber", "", ""],
  typeSpeed: 100,
  loop: true
})