const learner = [
  "Tom",
  "Manu",
  "Dorian",
  "Mohamed",
  "Adrien B",
  "Ludovic",
  "Denis",
  "Adrien C",
  "Angel",
  "Dylan",
  "Giovanni",
  "Iliess",
  "Justine",
  "Nath",
  "Maryam",
  "Lyne",
  "Zahra",
  "Dzhey",
  "Isabelle",
  "Nataliia",
  "Jordan",
  "Caroline",
  "Arnaud",
  "Julie",
  "Youris",
  "Stacy",
];

let newSection = document.createElement("section");

let newP = document.createElement("p");

newP.textContent = learner;
console.log(newP);

function randomBackground() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
