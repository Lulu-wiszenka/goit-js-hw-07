const refs = {
inputEl: document.querySelector('[type="range"]'),
textEl: document.querySelector('#text'),
}
//console.dir(refs.inputEl);
let textFontSize = 50;
refs.textEl.style.fontSize = `${textFontSize}px`;
refs.inputEl.addEventListener('input', onInputChageFontsize);

function onInputChageFontsize(event) {
    textFontSize = event.currentTarget.value;
    refs.textEl.style.fontSize = `${textFontSize}px`;
}