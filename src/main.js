"use strict";

const menu = document.querySelector(".hamburger");

const bars = document.querySelectorAll("span");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  console.log("clicked");
});

// const menuBtn = document.querySelector(".menu");

// // menuBtn.addEventListener("click", () => {
// //   console.log("click");
// //   //   menuBtn.classList.replace(`fa fa-bars`, `fa-solid fa-x`);
// // });

// menuBtn.addEventListener("click", () => console.log("clik"));

// console.log('gg');
