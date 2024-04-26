const psw = document.getElementById('pwd');
const pswConfirm = document.getElementById('pwd-confirm');

const newButton = document.createElement('button');
newButton.textContent = "submit";
pswConfirm.parentNode.appendChild(newButton);

function same(event) {
    const pswValue = psw.value;
    const pswValue1 = pswConfirm.value;

    if (pswValue != pswValue1) {
        psw.style.border = "2px solid red";
        pswConfirm.style.border = "2px solid red";
        alert("passwords are not identical");
    } if (pswValue.length < 6 && pswValue1.length < 6) {
        psw.style.border = "2px solid red";
        pswConfirm.style.border = "2px solid red";
        alert("You need to put min 6 characters");
    } if (pswValue === pswValue1) {
        psw.style.border = "2px solid green";
        pswConfirm.style.border = "2px solid green";
    }

}
newButton.addEventListener("click", same);
// psw.addEventListener("keyup", same);
// pswConfirm.addEventListener("keyup", same);
//s'active directement au relachement de la touche


