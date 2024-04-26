const ul = document.querySelector('ul');
const ulChildren = ul.childNodes;

for (let i = 0; i < ulChildren.length; i++) {
    const child = ulChildren[i];
    if (child.nodeType === 1) {
        console.log(child);
    }
}
const fast = ul.children[5];
const firstChild = ul.firstChild;
ul.insertBefore(fast, firstChild);

fast.classList.add('.important');

//need to add evenListener