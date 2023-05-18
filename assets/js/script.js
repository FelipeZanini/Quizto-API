//get all elements on html document
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
startQuiz();

//Start quiz function
function startQuiz() {
    score = 0;
    counter = 1;
    displayQuestion(counter);
    //gameOver () // if we arrive at the end, each function should be linked!
}

//Display Question function
function displayQuestion(counter) {

    questionCounter.innerText = counter;
    question.innerText = questions[counter].question;

    for (let i = 0; i < answers.length; i++) {
        answers[i].innerText = questions[counter].answers[i].text;
        if(questions[counter].answers[i].correct){
            answers[i].setAttribute("datatype", "right");
        }    
    }
}

//Display Check answer function
function checkAnswer(answer) {
console.log(answer); 
if(answer.getAttribute("datatype", "right")){
        alert('that is the right one');
    
}
   
}

