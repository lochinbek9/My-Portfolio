"use strict"

//============ Header color change when scrollingY ============

window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const headerNav = this.document.querySelector(".header__nav");
    headerNav.classList.toggle('sticky', window.scrollY > 0)
  })
})

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
  strings: ["", "Web Desiginer", "YouTuber", "Web Developer",],
  typeSpeed: 90,
  Backspeed: 50,
  loop: true
})

//========================== Btn Modal Create ==========================

// Global variables add hidden

const addHidden = () => {
  regestrationForms.classList.add("hidden")
}

const loginBtn = document.querySelector(".header__menu-btn");

const regestrationForms = document.querySelector(".registrationForms__modal");

const closeIcon = document.querySelector(".head__login-icon")

loginBtn.addEventListener("click", () => {
  regestrationForms.classList.toggle("hidden")
})

closeIcon.addEventListener("click", addHidden)

document.addEventListener("keyup", (e) => {
  if (e.key == "Escape") {
    addHidden()
  }
})


