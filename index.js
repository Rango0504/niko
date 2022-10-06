const body = document.querySelector(".body");
const logoImg = document.querySelector(".top-navigation__img");
const title = document.querySelector(".main-content__title--index");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    body.classList.add("backgroundBlack");
    logoImg.classList.add("invert");
    title.classList.add("bgBlur");
  } else if (window.scrollY < 100) {
    body.classList.remove("backgroundBlack");
    logoImg.classList.remove("invert");
    title.classList.remove("bgBlur");
  }
});
