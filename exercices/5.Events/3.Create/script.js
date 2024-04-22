const _initTime = Date.now();

const getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};
//déclarations des variables

const clickOnSquare = (e) => {
    const addSection = document.querySelector(".displayedsquare-wrapper");
    const newDiv = document.createElement("div");
    const squareColor = e.target.classList[1]; 
    newDiv.classList.add("displayedsquare");
    newDiv.classList.add(squareColor); 
    addSection.appendChild(newDiv);
    const logs = document.querySelector("ul");
    const newLi = document.createElement("li");
    newLi.textContent = "Created a new "+ squareColor + " "+ "square"; 
    logs.appendChild(newLi);
    console.log(squareColor);
    console.log(getElapsedTime());
};



const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
    actionSquare.addEventListener("click", clickOnSquare);
}



const body = document.querySelector("body");
const addSection = document.querySelector(".displayedsquare-wrapper");
const logs = document.querySelector("ul");
const newLi = document.createElement("li");

body.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) {
        body.style.backgroundColor = randomColor();
        const newDiv = document.createElement("div");
        newDiv.textContent = event.target.classList[1];
        addSection.appendChild(newDiv);
        newLi.textContent = "Great! You use the spacebar, the background color is now " +  body.style.backgroundColor;
        logs.appendChild(newLi);
    }if (event.keyCode === 76){
        newLi.remove();
    }
    if (event.keyCode === 83) { 
        const squares = document.querySelectorAll(".displayedsquare"); 
        squares.forEach(square => square.remove()); 
        const liSquares = document.querySelectorAll("li");
        liSquares.forEach(liSquare => liSquare.remove());
    }

});

addSection.addEventListener("click", function(event) {
    const clickedSquare = event.target;
    if (clickedSquare.classList.contains("displayedsquare")) {
        const clickedSquareColor = clickedSquare.classList[1];
        alert("The color of the clicked square : " + clickedSquareColor);
    }
});


function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    
    return `rgb(${r},${g},${b})`;
}

