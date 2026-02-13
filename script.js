"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

const yesBtn = document.querySelector(".btn--yes");
const noBtn = document.querySelector(".btn--no");
const title = document.querySelector(".title");
const container = document.querySelector(".container");

yesBtn.addEventListener("click", () => {
  title.textContent = "Yayyyy ❤️ Here is your surprise!";

  // Crear botón de descarga
  const downloadBtn = document.createElement("a");
  downloadBtn.href = "candle.pdf"; // archivo en la raíz
  downloadBtn.download = "candle.pdf";
  downloadBtn.textContent = "Download your Candle PDF 🕯️";
  downloadBtn.classList.add("btn");
  downloadBtn.style.backgroundColor = "#845ef7";
  downloadBtn.style.marginTop = "2rem";

  container.appendChild(downloadBtn);
});
