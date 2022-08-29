// CREATE A QUIZ CLASS
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// CREATE A QUESTION CLASS 
class Question {
    constructor(text, choices, answer) {
        this.text = text; 
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }

}

// DISPLAY QUESTION
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
       // show question
       let questionElement =document.getElementById("question");
       questionElement.innerHTML = quiz.getQuestionIndex().text;

       // show options 
       let choices = quiz.getQuestionIndex().choices;
       for (let i = 0; i < choices.length; i++) {
           let choiceElement = document.getElementById("choice"
           + i);
           choiceElement.innerHTML = choices[i];
           guess("btn" + i, choices[i]);
       }

       showProgress();
    }
};

// GUESS FUNCTION 
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}

// show quiz progress
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = 
    `Question ${currentQuestionNumber} of ${quiz.question.length}
    `;
}

// SHOW SCORE
function showScores() {
    let quizEndHTML =
        `
            <h1>passed the quiz</h1>
            <h2 id="score">You Scored: ${quiz.score} of ${quiz.
                question.length}</h2>
            <div class="quiz-repeat">
                 <a href="index.html">play again</a>   
            </div>
        `;
}