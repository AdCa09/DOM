const main = document.querySelector("main");

const section2 = main.children[1];
const h2S2 = section2.children[0];

const section3 = main.children[2];
const mainS3 = section3.children[0];
const h2S3 = mainS3.children[0];

section2.appendChild(h2S3);
mainS3.appendChild(h2S2);
