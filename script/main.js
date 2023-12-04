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

// disable download picture

let pwAllImages = document.querySelectorAll("img");
pwAllImages.forEach((value) => {
  value.oncontextmenu = (evt) => {
    evt.preventDefault();
  };
});

let pwAllVector = document.querySelectorAll("svg");
pwAllVector.forEach((value) => {
  value.oncontextmenu = (evt) => {
    evt.preventDefault();
  };
});

// button unavailable

const buttonDisable = document.getElementById("unavailable");
buttonDisable.disable = true;
