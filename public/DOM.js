let input = document.querySelector(".search-input input");
let inputTop = document.querySelector(".top-section");
let popup = document.querySelector(".autocom-box");

input.addEventListener("focus", () => {
  inputTop.classList.toggle("focus");
  popup.classList.toggle("close");
});

input.addEventListener("blur", () => {
  inputTop.classList.toggle("focus");
  popup.classList.toggle("close");
});
