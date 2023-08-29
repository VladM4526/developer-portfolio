let pwAllImages = document.querySelectorAll("img");
pwAllImages.forEach((value) => {
    value.oncontextmenu = (evt) => {
        evt.preventDefault();
    }
});

let pwAllVector = document.querySelectorAll("svg");
pwAllVector.forEach((value) => {
    value.oncontextmenu = (evt) => {
        evt.preventDefault();
    }
});