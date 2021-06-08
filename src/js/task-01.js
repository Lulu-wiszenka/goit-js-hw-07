
const mainListEl = document.querySelector('#categories');
console.log(`В списке ${mainListEl.children.length} категории.`);

[...mainListEl.children].forEach(elem => {
    console.log(`Категория: ${elem.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${elem.lastElementChild.children.length}`);
})