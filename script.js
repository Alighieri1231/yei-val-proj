"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const container = document.querySelector(".container");

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
  titleElement.innerHTML = "Siuu!! :3 ❤️ Espero te guste la sorpresa!";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");

  // Evita crear el botón más de una vez si hacen click muchas veces
  if (!document.querySelector(".download-pdf")) {
    const downloadBtn = document.createElement("a");
    downloadBtn.href = "candle.pdf"; // debe estar en la raíz del proyecto
    downloadBtn.download = "candle.pdf";
    downloadBtn.textContent = "Download your Candle PDF 🕯️";
    downloadBtn.classList.add("btn", "download-pdf");
    downloadBtn.style.backgroundColor = "#845ef7";
    downloadBtn.style.marginTop = "2rem";
    downloadBtn.style.textDecoration = "none";

    container.appendChild(downloadBtn);
  }
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
    "eStAs Segura?",
    "Porfa Mona",
    "No me hagas esto:(",
    "Me rompes el corazón :(",
    "Quieres k iore o k",
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
