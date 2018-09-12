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

    getNextQuestion() {
        const currentQuestion = this.questions[this.questionNum];
        this.questionNum++;
        return currentQuestion;
    }
}

const questions2018 = [
    new Question('Which movie won Best Picture?',
    ["Call Me By Your Name", "Darkest Hour",  "Dunkirk", "Get Out", "Lady Bird", "Phantom Thread", "The Post", "The Shape of Water", "Three Billboards Outside Ebbing, Missouri"],
    "The Shape Of Water"),
    new Question('Which actor won Best Actor?',
     ["Timothee Chalamet - Call Me By Your Name", "Daniel Day-Lewis - Phantom Thread", "Daniel Kaluuya - Get Out", "Gary Oldman - Darkest Hour", "Denzel Washington - Roman J. Israel, Esq."], 
     "Gary Oldman"),
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
const fullQuizButton = document.querySelector("#full-quiz");
const nextButton = document.querySelector(".next-btn");
const answers = document.querySelector(".answers")
let currentQuiz = undefined;

function displayNextQuestion() {
    const currentQuestion = currentQuiz.getNextQuestion();
    document.querySelector(".question").textContent = currentQuestion.questionString;
    let answersList = document.createElement("ul");
    
    for (let i = 0; i < currentQuestion.answerChoices.length; i++) {
        let answersItem = document.createElement("li");
        currentQuestion.answerChoices[i].replace(" ", "").replace(",","").replace(":","");
        answersItem.textContent = currentQuestion.answerChoices[i];
        answersList.appendChild(answersItem);
    }
    answers.innerHTML = ''
    answers.appendChild(answersList);
    
    //document.querySelector(".answers").textContent = currentQuestion.answerChoices;
    document.querySelector(".welcome").style.display = "none";
    document.querySelector(".question-container").style.display = "block";
};



fullQuizButton.addEventListener('click',function(e) {
    e.preventDefault();
    currentQuiz = new Quiz(questions2018);
    displayNextQuestion();
});

nextButton.addEventListener('click',function(e) {
    displayNextQuestion();
});

// Questions, Nominees and Answers
let quiz2018 = [
    // Best Picture
    { 
    question: 'Which movie won Best Picture?', 
    nominees: { one: "Call Me By Your Name", two: "Darkest Hour", three: "Dunkirk", four: "Get Out", five: "Lady Bird", six: "Phantom Thread", seven: "The Post", eight: "The Shape of Water", nine: "Three Billboards Outside Ebbing, Missouri"},
    answer: "The Shape of Water"
    },
    // Best Actor
    {
    question: 'Which actor won Best Actor?',
    nominees: { one: "Timothee Chalamet", two: "Daniel Day-Lewis", three: "Daniel Kaluuya", four: "Gary Oldman", five: "Denzel Washington"},
    answer: "Gary Oldman"
    },
    // Best Actress
    {
    question: 'Which actress won Best Actress?',
    nominees: { one: "Sally Hawkins", two: "Frances McDormand", three: "Margot Robbie", four: "Saoirse Ronan", five: "Meryl Steep"},
    answer: "Frances McDormand"
    },
    // Best Director
    {
    question: 'Which director won Best Director?'
    },
    // Best Supporting Actor
    {

    },
    // Best Supporting Actress
    {

    }
];