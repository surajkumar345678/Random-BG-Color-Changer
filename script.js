// Function to generate a random hex color
function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
  return `#${hex.toUpperCase()}`;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
const btn = document.querySelector("#btn");
const copyBtn = document.querySelector("#copy-btn");

// Create toast notification element
const toast = document.createElement("div");
toast.className = "toast";
document.body.appendChild(toast);

function changeBackgroundColor() {
  const color = getRandomHexColor();
  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

// Function to copy the hex code to the clipboard
function copyHexCode() {
  const hexCode = bgHexCodeSpanElement.innerText;
  navigator.clipboard
    .writeText(hexCode)
    .then(() => {
      toast.innerText = `${hexCode} Copied to clipboard!`;
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

// Event listeners
btn.onclick = changeBackgroundColor;
copyBtn.onclick = copyHexCode;
