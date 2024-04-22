const ol = document.querySelector("ol");

const a = ol.children[4];

const first = ol.firstElementChild;

ol.insertBefore(a, first);
