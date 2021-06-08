const refs = {
    value: document.querySelector('#value'),
    increment: document.querySelector('[data-action="increment"]'),
    decrement: document.querySelector('[data-action="decrement"]'),
};

refs.increment.addEventListener('click', onIncrementBtnClick);
refs.decrement.addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick(event) {
    const counterValue = parseInt(refs.value.textContent) + 1;
    refs.value.textContent = counterValue;
};

function onDecrementBtnClick(event) {
    const counterValue = parseInt(refs.value.textContent) - 1;
    refs.value.textContent = counterValue;
};

// refs.increment.addEventListener('click', () => {
//     cantor.increment();
//     refs.value.textContent = cantor.value;
// });
// refs.decrement.addEventListener('click', () => {
//     cantor.decrement();
//     refs.value.textContent = cantor.value;
// });

// const cantor = {
//     value: 0,
//     increment () {
//         this.value += 1;
//     // refs.value.textContent = this.value;
//     },
//     decrement () {
//     this.value -= 1;
//     },
// }