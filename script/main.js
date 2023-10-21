// mobile menu

const pwOpenModalBtn = document.querySelector(".pw-header-burger-button");
const pwOpenModal = document.querySelector(".pw-header-container");
const pwCloseModalBtn = document.querySelector(".pw-header-close-btn");

pwOpenModalBtn.addEventListener("click", SsToggleModal);
pwCloseModalBtn.addEventListener("click", SsToggleModal);

function SsToggleModal() {
  pwOpenModal.classList.toggle("hidden");
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
