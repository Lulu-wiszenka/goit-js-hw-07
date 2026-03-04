/*
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".
*/
const inputEl = document.querySelector("#name-input");
const nameText = document.querySelector("#name-output");
//console.log(inputEl);
inputEl.addEventListener("input", (event) => {
    const text = event.target.value;
    const text2 = text.trim();
    if (text2 === "") {
        nameText.textContent = "Anonymous";
    } else {
        nameText.textContent = text2;
    }
})
