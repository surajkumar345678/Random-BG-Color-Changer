// Function to generate a random hex color
function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
    return `#${hex.toUpperCase()}`;
  }
  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  
  function changeBackgroundColor() {
    const color = getRandomHexColor();
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  
  const btn = document.querySelector("#btn");
  btn.onclick = changeBackgroundColor;
  