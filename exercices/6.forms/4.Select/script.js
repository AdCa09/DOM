const darkModeSelect = document.getElementById('toggle-darkmode');

function activateDarkMode() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}

function deactivateDarkMode() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}

darkModeSelect.addEventListener('change', function () {

    if (darkModeSelect.value === 'dark') {
        activateDarkMode();
    } else {
        deactivateDarkMode();
    }
});
