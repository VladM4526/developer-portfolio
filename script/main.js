import { addBackToTop } from "vanilla-back-to-top";
// mobile menu

const pwOpenModalBtn = document.querySelector(".pw-header-burger-button");
const pwOpenModal = document.querySelector(".pw-header-container");
const pwCloseModalBtn = document.querySelector(".pw-header-close-btn");

const pwItemList = document.querySelectorAll(".pw-header-list-item");

pwOpenModalBtn.addEventListener("click", SsToggleModal);
pwCloseModalBtn.addEventListener("click", SsToggleModal);
pwItemList.forEach((item) => {
  item.addEventListener("click", SsToggleModal);
});

function SsToggleModal() {
  pwOpenModal.classList.toggle("hidden");
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
