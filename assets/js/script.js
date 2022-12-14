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
    `Question ${currentQuestionNumber} of ${quiz.questions.
        length}`;
}

// SHOW SCORE
function showScores() {
    let quizEndHTML =
        `
            <h1>passed the quiz</h1>
            <h2 id="score">You Scored: ${quiz.score} of ${quiz.
                questions.length}</h2>
            <div class="quiz-repeat">
                 <a href="index.html">play again</a>   
            </div>
        `;
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = quizEndHTML; 
 } 

 // CREATE QUIZ QUESIONS 
 let questions = [
    new Question(
        "Which city in usa has the most population?", ["Los Angeles", 
        "Chicago", "New York", "San Diego"], "New York"
        ),
        new Question(
            "How many people live in New York ?", ["8 million", 
            "20 million", "8.5  million", "5 million"], "8.5  million"
        ),
        new Question(
            "Which city is the world's largest by area?", ["Tokyo", 
            "Mexico City", "London", "New York"], "Tokyo"
        ),
        new Question(
            "Which city is the largest in Germany?", ["M??nchen", 
            "Berlin", "Hamburg", "K??ln"], "Berlin"
        ),
        new Question(
            "Which city in Europe is the most expensive to live in?", ["Berlin", 
            "London", "Z??rich", "Gen??ve"], "Z??rich"
        ),
        new Question(
            "Which city in the world has the most tourists?", ["London", 
            "Tokyo", "Bangkok", "Dubai"], "Bangkok"
        ),
        new Question(
            "Which city in the world has the most hours of sunshine?", ["Yuma", 
            "London", "Paris", "Miami"], "Yuma"
        ),
        new Question(
            "Which city is the capital of France?", ["Tokyo", 
            "Nice", "Marseille", "Paris"], "Paris"
        ),
        new Question(
            "Which city in europe has the most population?", ["Sankt Petersburg", 
            "Moskva", "Paris", "London"], "Sankt Petersburg"
        ),
        new Question(
            "Which city has the most rainy days?", ["Cherrapunijee", 
            "Tokyo", "London", "New York"], "Cherrapunijee "
        ),
 ];

 let quiz = new Quiz(questions);

 // display question 
 displayQuestion();

 // ADD A COUNTDOWN
 let time = 1;
 let quizTimeInMinutes = time * 60 * 60;
 quizTime = quizTimeInMinutes / 60; 

 let counting = document.getElementById("count-down");

 function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
             clearInterval(quizTimer);
             showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60; 
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000)
 }

 startCountdown(); 