const body = document.querySelector(".body");
const logoImg = document.querySelector(".top-navigation__img");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    body.classList.add("backgroundWhite");
    logoImg.classList.add("invert");
  } else if (window.scrollY < 100) {
    body.classList.remove("backgroundWhite");
    logoImg.classList.remove("invert");
  }
});
