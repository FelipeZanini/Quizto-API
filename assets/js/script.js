//get all elements on html document
let questionCounter = document.getElementById('question-counter');
let question = document.getElementById('question');
let answer1 = document.getElementById('answer-1');
let answer2 = document.getElementById('answer-2');
let answer3 = document.getElementById('answer-3');
let answer4 = document.getElementById('answer-4');
let nextQuestion = document.getElementById('next-question');
//start of quiz
const counter = 0;
function newQuestion(counter){
    if (counter == 0){
        questionCounter.innerHTML = ++counter;
        question.textContent = "What is H20?";
        answer1.textContent = "Water";
        answer2.textContent = "Aluminium";
        answer3.textContent = "Iron";
        answer4.textContent = "Oxygen";
    }//elseif(counter==1){do the other question} 
}
newQuestion(counter); //call the question start 
answer1.addEventListener('click', function(){
    if(answer1.textContent == 'Water') {
        console.log('you did it right');
    }
} )

