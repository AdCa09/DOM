const p = document.querySelectorAll("p:not([class])");

function randomColors() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

for (let x of p) {
  x.style.color = randomColors();
}
