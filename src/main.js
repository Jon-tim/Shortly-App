"use strict";

const menu = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-menu");

const linkInput = document.querySelector(".link-input");
const linkSubmit = document.querySelector(".link-submit");
const errorMessage = document.querySelector(".error");

const bars = document.querySelectorAll("span");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  mobileNav.classList.toggle("menu-closed");
});

linkSubmit.addEventListener("click", () => {
  if (linkInput.value === "") {
    linkInput.classList.add("invalid");
    linkSubmit.style.marginTop = "0.5rem";
    errorMessage.style.display = "block";
  } else {
    linkInput.classList.remove("invalid");
    linkSubmit.style.marginTop = "1rem";
    errorMessage.style.display = "none";
  }
});




//CREATE SHORTENED LINKS THROUGH DOM
// function shortened () {
//   ``
// }