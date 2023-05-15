let counter = 0;
//get all elements on html document
let questionCounter = document.getElementById('question-counter');
let question = document.getElementById('question');
let answers = document.getElementsByClassName('answers');
let nextQuestion = document.getElementById('next-question');

//start of quiz
function newQuestion(counter) {
    if (counter == 0) {
        let listAnswers = ['Water', 'Aluminium', 'Plastic', 'Oxygen'];
        question.textContent = "What is H20?";
        questionCounter.innerHTML = ++counter;
        for (i in answers) {
            answers[i].textContent = listAnswers[i];
        }
        checkAnswer();
    } else if (counter == 1) {
        let listAnswers = ['Spanish', 'Brazilian', 'Portuguese', 'English'];
        question.textContent = "What language is spoken on Brazil?";
        questionCounter.innerHTML = ++counter;
        for (i in answers) {
            answers[i].textContent = listAnswers[i];
        }
        checkAnswer();
    }
}

newQuestion(counter); //call the question start 

function checkAnswer() {
    for (let answer of answers) {
        answer.addEventListener('click', function () {
            if (answer.textContent == 'Water') {
                answer.classList.add('right-answer');
            } else {
                answer.classList.add('wrong-answer');
            }
            nextQuiz();
        })
    }

}
function nextQuiz() {

    nextQuestion.addEventListener('click', function () {
        for (let answer of answers) {
            let answerRight = answer.classList.contains('right-answer');
            if (answerRight) {
                counter = ++counter;
                newQuestion(counter);
                removeClass();
                break;
            } else {
                alert('You must answer right before proceed');
                break;
            }
        }
    })
}






function removeClass() {
    for(let i in answers){
        answers[i].classList.remove("right-answer", "wrong-answer");
        break;
    }
}