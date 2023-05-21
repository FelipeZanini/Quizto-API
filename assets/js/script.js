//get all elements on html document
let quizBox = document.getElementById('quiz-box');
let questionCounter = document.getElementById('question-counter');
let question = document.getElementById('question');
let answers = document.getElementsByClassName('answers');
let nextQuestion = document.getElementById('next-question');
let startButton = document.getElementById('start-button');
let gameOverText = document.getElementById('game-over-text');
let LogoLandPage = document.getElementById('logo-land-page');

//global variables
let score, counter;

//Question for our quiz
const questions = [
    {
        question: 'What was the first animal in space?',
        answers: [
            { text: 'Dog', correct: true },
            { text: 'Bird', correct: false },
            { text: 'Chimpanzee', correct: false },
            { text: 'Rat', correct: false },
        ]
    },

    {
        question: 'Where did writing come from?',
        answers: [

            { text: 'Ancient Greece', correct: false },
            { text: 'Roman Empire', correct: false },
            { text: 'Aztec Empire', correct: false },
            { text: 'Mesopotamia', correct: true },
        ]
    },

    {
        question: 'What was the largest empires in history?',
        answers: [

            { text: 'Mongol Empire', correct: false },
            { text: 'British Empire', correct: true },
            { text: 'Russian Empire', correct: false },
            { text: 'Spanish Empire', correct: false },
        ]
    },


    {
        question: 'What is the most common element in universe',
        answers: [

            { text: 'Hydrogen', correct: true },
            { text: 'Carbon', correct: false },
            { text: 'Helium', correct: false },
            { text: 'Uranium', correct: false },
        ]
    },

    {
        question: 'What is the smallest bone in human body?',
        answers: [

            { text: 'The femur', correct: false },
            { text: 'The stapes', correct: true },
            { text: 'The metacarpal', correct: false },
            { text: 'The trapezoid', correct: false },
        ]
    }

    

    
]
document.addEventListener("DOMContentLoaded", function() { 
    
    startButton.classList.remove('hide');
    gameOverText.classList.remove('hide');
    LogoLandPage.classList.remove('hide');
    gameOverText.innerHTML = `<strong>Test Your Knowledge! <i class="far fa-lightbulb"></i></strong> `;
})
//Start quiz function
function startQuiz() {
    score = 0;
    counter = 0;
    displayQuestion(counter);
    
}

//Display Question function
function displayQuestion(counter) {

    questionCounter.innerHTML =`${1 + counter}`;
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

//game over function
function gameOver() {
    if (counter == questions.length) {
        for (let i = 0; i < 2; i++) {
            quizBox.children[i].classList.add('hide');
        }
        startButton.classList.remove('hide');
        gameOverText.classList.remove('hide');
        LogoLandPage.classList.remove('hide');
        startButton.innerHTML = "Restart";
        gameOverText.innerHTML = `<strong>Congratulation!</strong><br>Your Score is: ${score}`;
    }
}

function restartQuiz() {
    for (let i = 0; i < 2; i++) {
        quizBox.children[i].classList.remove('hide');
    }
    gameOverText.classList.add('hide');
    startButton.classList.add('hide')
    LogoLandPage.classList.add('hide');;
    startQuiz()
}
