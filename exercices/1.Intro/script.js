document.title = "Modifying the DOM"; /* title in the head modify*/

document.querySelector("body").style.background = "#FF69B4";

let children = document.querySelector("body").childNodes;

// console.log(children);
for (let element of children) {
  console.log(element /*.children*/);
}
