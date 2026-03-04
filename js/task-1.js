/*
З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
*/
const navEl = document.querySelector("#categories");
const navElArr = [...navEl.children];

function schowH(arr) {
    const arrH2 = arr.map(item => {
        return item.children[0].textContent;
    });

    const liTextCont = arr.map(item => item.children[1].children);
    
    
    for (let i = 0; i < arrH2.length; i += 1){
        console.log(`Category: ${arrH2[i]}`)
        console.log(`Elements: ${liTextCont[i].length}`)
       
    }
   
}

console.log(`Number of categories: ${navElArr.length}`);
schowH(navElArr);