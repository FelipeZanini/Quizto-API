document.addEventListener("DOMContentLoaded", function() {
    for(i = 0; i < 5; i++){
        let counter = document.getElementById('question-counter');
        counter.innerHTML = ++i;
    }
        });
