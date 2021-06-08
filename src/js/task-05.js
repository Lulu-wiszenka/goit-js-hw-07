const refs = {
    inputEl: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
}
refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
    refs.nameLabel.textContent = 'незнакомец'
  }  
}