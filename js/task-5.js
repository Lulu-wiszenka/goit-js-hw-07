function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const div = document.querySelector(".widget");
const body = div.parentNode;
const btn = document.querySelector(".change-color");
const message = document.querySelector(".color");
btn.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  message.textContent = getRandomHexColor();
});
