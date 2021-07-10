const question = document.querySelectorAll('button');
const answer = document.getElementsByClassName('answer');
const arrowDown = document.getElementsByClassName('arrow-down');
const arrowUp = document.getElementsByClassName('arrow-up');

// button id value is placed in the index of the nodelist to determine which answer to show
function showAnswer(btnID) {
    let i = btnID;
    answer[i].classList.toggle('answer--active');
    arrowDown[i].classList.toggle('arrow-down--active');
    arrowUp[i].classList.toggle('arrow-up--active');
    question[i].classList.toggle('queston-button--active');
}

question.forEach(button => button.addEventListener('click', event => {
    // gets the id number value of buttons
    const btnID = Number(event.target.attributes["data-id"].value);
    showAnswer(btnID);
}));