// Get all elements on html document
let quizBox = document.getElementById('quiz-box');
let questionCounter = document.getElementById('question-counter');
let question = document.getElementById('question');
let answers = document.getElementsByClassName('answers');
let nextQuestion = document.getElementById('next-question');
let startButton = document.getElementById('start-button');
let gameOverText = document.getElementById('statics-pages-text');
let LogoLandPage = document.getElementById('land-page-figure');


// Questions collections of the quiz 
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
        question: 'What is the most common element in universe?',
        answers: [

            { text: 'Hydrogen', correct: true },
            { text: 'Carbon', correct: false },
            { text: 'Helium', correct: false },
            { text: 'Uranium', correct: false },
        ]
    },

    {
        question: "What was the Disney's first film?",
        answers: [

            { text: 'Snow White, 1937', correct: true },
            { text: 'Bambi, 1942', correct: false },
            { text: 'Dumbo, 1943', correct: false },
            { text: 'Cinderella, 1950', correct: false },
        ]
    },

    {
        question: 'What is the smallest planet in our solar system?',
        answers: [

            { text: 'Mercury', correct: true },
            { text: 'Saturn', correct: false },
            { text: 'Uranus', correct: false },
            { text: 'Neptune', correct: false },
        ]
    },

    {
        question: 'From what grain is the Japanese spirit Sake made?',
        answers: [

            { text: 'Barley', correct: false },
            { text: 'Oats', correct: false },
            { text: 'Rice', correct: true },
            { text: 'Corn', correct: false },
        ]
    },

    {
        question: 'How many time zones are there in Russia?',
        answers: [

            { text: 'Eight', correct: false },
            { text: 'Ten', correct: false },
            { text: 'Three', correct: false },
            { text: 'Eleven', correct: true },
        ]
    },

    {
        question: 'What country has the most islands in the world?',
        answers: [

            { text: 'Sweden', correct: true },
            { text: 'Japan', correct: false },
            { text: 'Finland', correct: false },
            { text: 'Canada', correct: false },
        ]
    },

    {
        question: 'When was Netflix founded?',
        answers: [

            { text: '2010', correct: false },
            { text: '2005', correct: false },
            { text: '1997', correct: true },
            { text: '2001', correct: false },


        ]
    }
]

/*  Global variables, such as score and counter.
The counter is used to iterate through the questions array, 
and also display the current question to the user */
let score, counter;

// Wait for the DOM to finish loading to display the land page
document.addEventListener("DOMContentLoaded", function () {

    gameOverText.innerHTML = `<strong>Test Your Knowledge! <i class="far fa-lightbulb"></i></strong> `;
})

/**
 * Is called when the user fires the start or restart button,
 * hiding the land or game over page to the user,
 * calling the 'startQuiz' function to start the quiz */
function setUpQuiz() {
    for (let i = 0; i < 2; i++) {
        quizBox.children[i].classList.remove('hide');
    }
    
    gameOverText.classList.add('hide');
    startButton.classList.add('hide')
    LogoLandPage.classList.add('hide');;
    
    startQuiz()
}

/**
 * The quiz start function,
 * is called when the user wants to start or restart the quiz
 */
function startQuiz() {
    score = 0;
    counter = 0;
    
    randomizeQuestions();
    displayQuestion(counter);
}

/**
 * Called to shuffle questions,
 */
function randomizeQuestions() {
    for (let i = 0; i < questions.length - 1; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let oldValue = questions[i];

        questions[i] = questions[j];
        questions[j] = oldValue;
    }
}

/**
 * Display the questions and answers to the user,
 * also set the right answer to the respectively question
 */
function displayQuestion(counter) {
    question.innerText = questions[counter].question;
    questionCounter.innerHTML = `${1 + counter}`;
    
    for (let i = 0; i < answers.length; i++) {
        answers[i].innerText = questions[counter].answers[i].text;
        if (questions[counter].answers[i].correct) {
            answers[i].setAttribute("datatype", "right");
        }
    }
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

    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("wrong", "right");
        answers[i].removeAttribute("datatype", "right");
        answers[i].style.pointerEvents = 'auto';
    }
    gameOver();
    displayQuestion(counter);
}

/**
 * Is called every time the user wants to proceed to next question,
 * checking if the game is over, to display the game over page,
 * showing the score and the restart button to the user
 */
function gameOver() {
    if (counter == questions.length) {
        for (let i = 0; i < 2; i++) {
            quizBox.children[i].classList.add('hide');
        }
        startButton.innerHTML = "Restart";
        gameOverText.innerHTML = `<strong>Congratulation!</strong><br>Your Score is: ${score}`;

        startButton.classList.remove('hide');
        gameOverText.classList.remove('hide');
        LogoLandPage.classList.remove('hide');
    }
}

