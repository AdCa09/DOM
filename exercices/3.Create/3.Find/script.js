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

const article = document.getElementById('art');


learner.forEach((element) => {

    const newP = document.createElement('p');

    newP.textContent = element;

    newP.style.backgroundColor = randomBackground();

    article.appendChild(newP);
});


function randomBackground() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function dark(color) {
    const [r, g, b] = color.match(/\d+/g).map(Number);
    const luminosity = (r * 500 + g * 700 + b * 300) / 1000;
    return luminosity < 128;
}


const para = document.querySelectorAll("#art p");

para.forEach((x) => {
    const backColor = x.style.backgroundColor;
    if (dark(backColor)) {
        x.style.color = "rgb(255, 255, 255)";
    }
});
// ordre des éléments aléatoires

const randomArr = [Math.floor(Math.random() * learner.length)];


function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex]], array[randomIndex] = [array[randomIndex]], array[currentIndex];
    }
    return array;
}
console.log(shuffle(learner));