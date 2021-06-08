const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientsArray = ingredients.map(ingredient => {
    const itemIngredientEl = document.createElement('li');
    itemIngredientEl.textContent = ingredient;
    return itemIngredientEl;
});

ingredientsListEl.append(...ingredientsArray);

console.log(document.querySelector('#ingredients'));