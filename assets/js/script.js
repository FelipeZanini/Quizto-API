//get all elements on html document
let quizBox = document.getElementById('quiz-box');
let questionCounter = document.getElementById('question-counter');
let question = document.getElementById('question');
let answers = document.getElementsByClassName('answers');
let nextQuestion = document.getElementById('next-question');

//global variables
let score, counter;

//Question for our quizz
const questions = [
    {
        question: 'What is H2O',
        answers: [
            { text: 'Water', correct: true },
            { text: 'Aluminium', correct: false },
            { text: 'Oxygen', correct: false },
            { text: 'Carbon', correct: false },
        ]
    },

    {
        question: 'What is jujubinha',
        answers: [

            { text: 'A Bird', correct: false },
            { text: 'A Dog', correct: true },
            { text: 'A Plane', correct: false },
            { text: 'A Homo Sapiens', correct: false },
        ]
    }

]
starbuttun()
function starbuttun() {
    for (let i = 0; i < 2; i++) {
        quizBox.children[i].classList.add('hide');

    }
    let startgamePage = document.createElement('div');
        startgamePage.innerHTML = "<p onclick='restartQuiz()'>Vai toma no seu cu</p>"
        quizBox.appendChild(startgamePage);
}
startQuiz();

//Start quiz function
function startQuiz() {
    score = 0;
    counter = 0;
    console.log(counter);
    displayQuestion(counter);
}

//game over function
function gameOver() {
    if (counter == questions.length) {
        for (let i = 0; i < 2; i++) {
            quizBox.children[i].classList.add('hide');
        }
        let endGamePage = document.createElement('div');
        endGamePage.innerHTML = "<p onclick='restartQuiz()'>Vai toma no seu cu</p>"
        endGamePage.id= "restart-button"
        quizBox.appendChild(endGamePage);

    }
}
//Display Question function
function displayQuestion(counter) {

    questionCounter.innerText = `${1 + counter}/5`;
    question.innerText = questions[counter].question;

    for (let i = 0; i < answers.length; i++) {
        answers[i].innerText = questions[counter].answers[i].text;
        if (questions[counter].answers[i].correct) {
            answers[i].setAttribute("datatype", "right");
        }
    }
}

//Display Check answer function
function checkAnswer(answer) {
    if (answer.getAttribute("datatype", "right")) {
        answer.classList.add("right");
        score++;
    } else {
        answer.classList.add("wrong");
        //answer.getAttribute("datatype", "right".click());
    }
    for (let i = 0; i < answers.length; i++) {
        answers[i].style.pointerEvents = 'none';
        if (answers[i].getAttribute("datatype", "right")) {
            answers[i].classList.add("right");
        }
    }
    nextQuestion.classList.remove('hide');
    counter++;
}

function nextButtom() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("wrong", "right");
        answers[i].removeAttribute("datatype", "right");
        answers[i].style.pointerEvents = 'auto';
    }
    nextQuestion.classList.add('hide');
    gameOver();
    displayQuestion(counter);
}

function restartQuiz() {
    for (let i = 0; i < 2; i++) {
        quizBox.children[i].classList.remove('hide');

    }
    document.querySelector('#restart-button').remove();
    startQuiz()
}
