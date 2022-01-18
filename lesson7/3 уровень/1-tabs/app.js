'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let navCollection = document.querySelectorAll(".nav-link");
navCollection.forEach(e => e.addEventListener("click", clickHandler));

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    changeText(event);
    changeActiveClass(event);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    for(let i = 0; i < navCollection.length; i++) {
        if(navCollection[i].classList.contains("active")) {
            navCollection[i].classList.remove("active");
            break;
        }
    }
    event.target.classList.add("active");
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    let divWithText = document.querySelector(".text");
    let textCollection = [];
    for(let text in texts) {
        textCollection.push(texts[text]);
    }
    for(let i = 0; i < navCollection.length; i++) {
        if(navCollection[i] === event.target) {
            divWithText.textContent = textCollection[i];
            break;
        }
    }
}