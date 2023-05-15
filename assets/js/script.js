const counter = 0;
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
    }//elseif(counter==1){do the other question} 
}
newQuestion(counter); //call the question start 

function checkAnswer() {
    for (let answer of answers) {
        answer.addEventListener('click', function () {
            if (answer.textContent == 'Water') {
                answer.classList.add('right-answer');
            }else {
                answer.classList.add('wrong-answer');
            }
        })
    }
}


function nextQuestion() {
    nextQuestion.addEventListener('click', function () {
        console.log('coco');
    })
}





