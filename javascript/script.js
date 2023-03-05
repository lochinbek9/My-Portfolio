"use strict"

//=================== AOS Scroll animation ===================

AOS.init();

//================= Theme Light and Dark mode Site =================

const dayNight = document.querySelector(".day-night__icons");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark-mode");
})

//======================== Typing Animation ========================

var typed = new Typed(".typing", {
  strings: ["", "Web Desiginer", "Graphic Designer", "Web Developer", "YouTuber"],
  typeSpeed: 90,
  Backspeed: 50,
  loop: true
})