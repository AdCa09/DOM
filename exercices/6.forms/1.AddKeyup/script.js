const inputElement = document.getElementById('firstname');
const displaySpan = document.getElementById('display-firstname');

function updateSpan(event) {
    displaySpan.textContent = event.target.value;
}


inputElement.addEventListener('keyup', updateSpan);
