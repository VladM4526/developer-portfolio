import { addBackToTop } from "vanilla-back-to-top";
// mobile menu

const pwOpenModalBtn = document.querySelector(".pw-header-burger-button");
const pwOpenModal = document.querySelector(".pw-header-container");
const pwCloseModalBtn = document.querySelector(".pw-header-close-btn");

const pwItemList = document.querySelector(".pw-header-list-item");
const pwItemLink = document.querySelector(".pw-header-list-item-link");

pwOpenModalBtn.addEventListener("click", SsToggleModal);
pwCloseModalBtn.addEventListener("click", SsToggleModal);

function SsToggleModal() {
  pwOpenModal.classList.toggle("hidden");
}

pwItemLink.addEventListener("click", closeMenu);

function closeMenu() {
  pwOpenModal.classList.remove("hidden");
}

// disable any copy element

document.addEventListener("contextmenu", (evt) => {
  evt.preventDefault();
});

// button on top

addBackToTop({
  diameter: 66,
  backgroundColor: "#D9D9D9",
  textColor: "#333333",
});
