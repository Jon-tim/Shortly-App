"use strict";

const menu = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-menu");

const linkInput = document.querySelector(".link-input");
const linkSubmit = document.querySelector(".link-submit");
const errorMessage = document.querySelector(".error");

const shortenedLinkContainer = document.querySelector(".shortened-links");

const bars = document.querySelectorAll("span");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  mobileNav.classList.toggle("menu-closed");
});

const shortener = async () => {
  const response = await fetch(
    `https://api.shrtco.de/v2/shorten?url=${linkInput.value}`
  );
  const data = await response.json();

  const htmlUrls = `<div class="cont">
      <p class="cont-one">${data.result.original_link}</p>
      <div class="cont-two">
      <p>${data.result.full_short_link}</p>
      <button class="copyBtn">copy</button>
      </div>
      </div>`;

  shortenedLinkContainer.insertAdjacentHTML("afterbegin", htmlUrls);

  const copy = shortenedLinkContainer.querySelector(".copyBtn");

  copy.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "var(--Dark-Violet)";
    e.target.textContent = "copied!";

    let removeCopied = e.target.parentElement.parentElement;
    // console.log(removeCopied);
    setTimeout(() => {
      removeCopied.remove();
    }, 1000);
    // parent.remove
  });

  // console.log(copy)
};

linkSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (linkInput.value === "") {
    linkInput.classList.add("invalid");
    linkSubmit.style.marginTop = "0.5rem";
    errorMessage.style.display = "block";
  } else {
    linkInput.classList.remove("invalid");
    linkSubmit.style.marginTop = "1rem";
    errorMessage.style.display = "none";
    shortener();
  }

  linkInput.value = "";
});
