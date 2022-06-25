"use strict";

const menu = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-menu");

const linkInput = document.querySelector(".link-input");
const linkInputHolder = document.querySelector(".link-input").placeholder;
const linkSubmit = document.querySelector(".link-submit");

const bars = document.querySelectorAll("span");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  mobileNav.classList.toggle("menu-closed");
});

linkSubmit.addEventListener("click", () => {
  linkInput.classList.toggle("invalid");
});
