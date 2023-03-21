let input = document.querySelector(".search-input input");
let inputTop = document.querySelector(".top-section");

input.addEventListener("focus", () => {
  inputTop.classList.toggle("focus");
});

input.addEventListener("blur", () => {
  inputTop.classList.toggle("focus");
});
