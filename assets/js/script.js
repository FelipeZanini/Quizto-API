// Get all elements on html document
let quizBox = document.getElementById('quiz-box');
let questionCounter = document.getElementById('question-counter');
let question = document.getElementById('question');
let answers = document.getElementsByClassName('answers');
let nextQuestion = document.getElementById('next-question');
let startButton = document.getElementById('start-button');
let gameOverText = document.getElementById('statics-pages-text');
let LogoLandPage = document.getElementById('land-page-figure');

/*  Global variables, such as score and counter.
The counter is used to iterate through the questions array, 
and also display the current question to the user */
let score, counter;

// Wait for the DOM to finish loading to display the land page
document.addEventListener("DOMContentLoaded", function () {

    gameOverText.innerHTML = `<strong>Test Your Knowledge! <i class="far fa-lightbulb"></i></strong> `;
});

/**
 * Is called when the user fires the start or restart button,
 * hiding the land or game over page to the user,
 * calling the 'startQuiz' function to start the quiz */
function setUpQuiz() {
    for (let i = 0; i < 2; i++) {
        quizBox.children[i].classList.remove('hide');
    }

    gameOverText.classList.add('hide');
    startButton.classList.add('hide');
    LogoLandPage.classList.add('hide');

    startQuiz();
};

/**
 * The quiz start function,
 * is called when the user wants to start or restart the quiz
 */
function startQuiz() {
    score = 0;
    counter = 0;

    displayQuestion(counter);
};

/**
 * Function to get random question from a API
 */
async function quizQuestions(counter) {
    const response = await fetch("https://the-trivia-api.com/api/questions");
    const data = await response.json();

    //Later try to implement Fisher-Yates algorith
    const array = [0, 1, 2, 3];
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

    question.innerText = data[counter].question;
    answers[shuffledArray[0]].innerText = data[counter].correctAnswer;
    answers[shuffledArray[1]].innerText = data[counter].incorrectAnswers[0];
    answers[shuffledArray[2]].innerText = data[counter].incorrectAnswers[1];
    answers[shuffledArray[3]].innerText = data[counter].incorrectAnswers[2];

    // Block of code to compact the answers if the text inside the div is bigger than the container
    for(let answer of answers){
        if(answer.innerText.length > 35){
            answer.style.lineHeight = "20px";
            answer.style.height = "50px";
        };
        if(answer.innerText.length > 50){
            answer.style.height = "65px";
        };
    };
    
    // Setting the right attribute to the answer
    answers[shuffledArray[0]].setAttribute("datatype", "right");
};

/**
 * Display the questions and answers to the user,
 * also set the right answer to the respectively question
 */
function displayQuestion(counter) {
    questionCounter.innerHTML = `${1 + counter}`;
    quizQuestions(counter);
}
/**
 * Get the clicked answer from the user,
 * giving a visual feedback if the user clicked on the right or wrong one,
 * stopping any user interaction with the answers after being called
 */
function checkAnswer(answer) {

    if (answer.getAttribute("datatype", "right")) {
        answer.classList.add("right");
        score++;
    } else {
        answer.classList.add("wrong");
    }
    // Called to stop any user interaction with the answers, and show the right answers
    stopUserInteraction();

    counter++;
    // Show the next question button to the user
    nextQuestion.classList.remove('hide');
}
/**
 * This function is made to stop any pointer events (interactions) from the user
 * showing to the user the right answer if he/she failed,
 * in other words, it sets the attempts to one
 */
function stopUserInteraction() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].style.pointerEvents = 'none';
        if (answers[i].getAttribute("datatype", "right")) {
            answers[i].classList.add("right");
        }
    }
}
/**
 * This function is called when the user fires the next button, 
 * setting the answers to default, removing class and data type,
 * calling the gameOver function to check if the quiz is finished, 
 * if not it calls the displayQuestion to proceed
 */
function nextPage() {
    // Hide the next question button
    nextQuestion.classList.add('hide');
    // Set the answers to default
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("wrong", "right");
        answers[i].removeAttribute("datatype", "right");
        answers[i].style.height = null;
        answers[i].style.lineHeight = null;
        answers[i].style.pointerEvents = 'auto';
    }
    // Check if the quiz is over
    gameOver();
    // proceeding if there are still questions to be displayed
    displayQuestion(counter);
}

/**
 * Is called every time the user wants to proceed to next question,
 * checking if the game is over, to display the game over page,
 * showing the score and the restart button to the user
 */
function gameOver() {
    // Hide the main quiz content
    if (counter == 10) {
        for (let i = 0; i < 2; i++) {
            quizBox.children[i].classList.add('hide');
        }
        // Add content to the game over page and button
        startButton.innerHTML = "Restart";
        gameOverText.innerHTML = `<strong>Congratulation!</strong><br>Your Score is: ${score}`;

        // Display the game over page content
        startButton.classList.remove('hide');
        gameOverText.classList.remove('hide');
        LogoLandPage.classList.remove('hide');
    }
}

