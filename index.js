const clickMeButton = document.querySelector("#clickMeBtn");
const message = document.querySelector("#message");

const clickMe = () => {
  message.innerHTML = "Click me!";
  message.style.color = " #3498db";
  clickMeButton.style.background = "#FF6969";
};
