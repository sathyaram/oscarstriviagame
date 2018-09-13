class Question {
    constructor(questionString,answerChoices,actualAnswer) {
        this.questionString = questionString;
        this.answerChoices = answerChoices;
        this.actualAnswer = actualAnswer;
    }

    isAnswerCorrect(selectedAnswer) {
        if (selectedAnswer === this.actualAnswer) {
            return true;
        } else return false;
    }
}

class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.score = 0;
        this.questionNum = 0;
    }

    incrementScore() {
        this.score++;
    }

    getCurrentQuestion() {
        return this.questions[this.questionNum];
    }

    moveToNextQuestion() {
        this.questionNum++;
    }

    isQuizFinished() {
        if (this.questionNum === this.questions.length) {
            return true;
        } else return false;
    }
}

const questions2018 = [
    new Question('Which movie won Best Picture?',
    ["Call Me By Your Name", "Darkest Hour",  "Dunkirk", "Get Out", "Lady Bird", "Phantom Thread", "The Post", "The Shape Of Water", "Three Billboards Outside Ebbing, Missouri"],
    "The Shape Of Water"),
    new Question('Which actor won Best Actor?',
     ["Timothee Chalamet - Call Me By Your Name", "Daniel Day-Lewis - Phantom Thread", "Daniel Kaluuya - Get Out", "Gary Oldman - Darkest Hour", "Denzel Washington - Roman J. Israel, Esq."], 
     "Gary Oldman - Darkest Hour"),
    new Question('Which actress won Best Actress?',
     ["Sally Hawkins - The Shape of Water", "Frances McDormand - Three Billboards outside Ebbing, Missouri", "Margot Robbie - I, Tonya", "Saoirse Ronan - Lady Bird", "Meryl Steep - The Post"],
      "Frances McDormand"),
    new Question('Which actor won Best Supporting Actor?',
    ["Willem Dafoe - The Florida Project", "Woody Harrelson - Three Billboards outside Ebbing, Missouri", "Richard Jenkins - The Shape of Water", "Christopher Plummer - All the Money in the World", "Sam Rockwell - Three Billboards outside Ebbing, Missouri"],
    "Sam Rockwell"),
    new Question('Which actress won Best Supporting Actress?',
    ["Mary J. Blige - Mudbound", "Allison Janney - I, Tonya", "Lesley Manville - Phantom Thread", "Laurie Metcalf - Lady Bird", "Octavia Spencer - The Shape of Water"],
    "Allison Janney"),
    new Question('Which movie won Best Animated Feature Film?',
    ["The Boss Baby", "The Breadwinner", "Coco", "Ferdinand", "Loving Vincent"],
    "Coco"),
    new Question('Which director won Best Director?',
    ["Christopher Nolan - Dunkirk", "Jordan Peele - Get Out", "Greta Gerwig - Lady Bird", "Paul Thomas Anderson - Phantom THread", "Guillermo del Toro - The Shape of Water"],
    "Guillermo del Toro"),
    new Question("Which movie won Best Original Score (Music)?",
    ["Dunkirk", "Phantom Thread", "The Shape of Water", "Star Wars: The Last Jedi", "Three Billboards outside Ebbing, Missouri"],
    "The Shape of Water"),
    new Question("Which movie won Best Adapted Screenplay?",
    ["Call Me By Your Name", "The Disaster Artist", "Logan", "Molly's Game", "Mudbound"],
    "Call Me By Your Name"),
    new Question("Which movie won Best Original Screenplay?",
    ["The Big Sick", "Get Out", "Lady Bird", "The Shape of Water", "Three Billboards outside Ebbing, Missouri"],
    "Get Out")
];

const main = document.querySelector("main");
const shortQuizButton = document.querySelector("#short-quiz");
const fullQuizButton = document.querySelector("#full-quiz");
const nextButton = document.querySelector(".next-btn");
const answers = document.querySelector(".answers");
const result = document.querySelector("#result");
const score = document.querySelector('#score');
let currentQuiz = undefined;

function displayCurrentQuestion() {
    const currentQuestion = currentQuiz.getCurrentQuestion();

    document.querySelector(".question").textContent = currentQuestion.questionString;
    let answersList = document.createElement("ul");
    
    for (let i = 0; i < currentQuestion.answerChoices.length; i++) {
        let answersItem = document.createElement("li");
        let replacedItem = currentQuestion.answerChoices[i].split(" ").join("").replace(",","").replace(":","");
        let searchTerm = '-';
        let indexOfDash = replacedItem.indexOf(searchTerm);
        let imageName = paragraph.substring(0,indexOfDash);
        console.log(bob);
        console.log(replacedItem);
        answersItem.textContent = currentQuestion.answerChoices[i];
        answersList.appendChild(answersItem);
    }
    answers.innerHTML = ''
    answers.appendChild(answersList);
    
    //document.querySelector(".answers").textContent = currentQuestion.answerChoices;
    document.querySelector(".welcome").style.display = "none";
    document.querySelector(".question-container").style.display = "block";
};

function displayScore() {
    score.textContent = `${currentQuiz.score}/${currentQuiz.questions.length}`;
};



shortQuizButton.addEventListener('click',function(e) {
    e.preventDefault();
    currentQuiz = new Quiz(questions2018.slice(0,3));
    displayScore();
    displayCurrentQuestion();
});

fullQuizButton.addEventListener('click',function(e) {
    e.preventDefault();
    currentQuiz = new Quiz(questions2018);
    displayScore();
    displayCurrentQuestion();
});

nextButton.addEventListener('click',function(e) {
    currentQuiz.moveToNextQuestion();
    const finished = currentQuiz.isQuizFinished();
    console.log(finished);
    if (finished) {
        main.innerHTML = "You're done!";
    }
    displayCurrentQuestion();
    result.textContent = "";
});

answers.addEventListener('click', function(e) {
    console.log(e.target.textContent);
    console.log(currentQuiz.getCurrentQuestion());
    let answerValidity = currentQuiz.getCurrentQuestion().isAnswerCorrect(e.target.textContent);
    if (answerValidity) {
        currentQuiz.incrementScore();
        displayScore();
        result.textContent = "Well done! That's correct."
    } else { 
        result.textContent = `Incorrect, the actual answer was "${currentQuiz.getCurrentQuestion().actualAnswer}"`;
    }
});