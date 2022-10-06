const body = document.querySelector(".body--about");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    body.classList.add("brightness");
  } else if (window.scrollY < 100) {
    body.classList.remove("brightness");
  }
});
