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
