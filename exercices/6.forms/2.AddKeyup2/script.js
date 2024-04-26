const age = document.getElementById('age');
const hiddenSection = document.getElementById('a-hard-truth');

function adult(event) {
    const userAge = parseInt(age.value);
    if (userAge < 18) {
        hiddenSection.style.visibility = "visible";
    } else {
        hiddenSection.style.visibility = "hidden";
    }
}
// faire enter pour afficher l'un des deux hiddenSection 

/*input pourrais remplacer keyup ce qui permettrais de ne pas devoir faire enter pour afficher un des hiddenSection*/

age.addEventListener('keyup', adult);