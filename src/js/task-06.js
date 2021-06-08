const inputElem = document.querySelector('#validation-input');
inputElem.addEventListener('blur', onValidMarkupInput);

function onValidMarkupInput(event) {
    if (parseInt(inputElem.dataset.length) === event.currentTarget.value.length) {
        inputElem.classList.add('valid');
        inputElem.classList.remove('invalid')
        return
    } 
    
    inputElem.classList.add('invalid');
}
