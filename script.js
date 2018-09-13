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
     ["Timothee Chalamet - Call Me By Your Name", "Daniel Day Lewis - Phantom Thread", "Daniel Kaluuya - Get Out", "Gary Oldman - Darkest Hour", "Denzel Washington - Roman J. Israel, Esq."], 
     "Gary Oldman - Darkest Hour"),
    new Question('Which actress won Best Actress?',
     ["Sally Hawkins - The Shape Of Water", "Frances McDormand - Three Billboards Outside Ebbing, Missouri", "Margot Robbie - I, Tonya", "Saoirse Ronan - Lady Bird", "Meryl Streep - The Post"],
      "Frances McDormand - Three Billboards Outside Ebbing, Missouri"),
    new Question('Which actor won Best Supporting Actor?',
    ["Willem Dafoe - The Florida Project", "Woody Harrelson - Three Billboards Outside Ebbing, Missouri", "Richard Jenkins - The Shape Of Water", "Christopher Plummer - All The Money In The World", "Sam Rockwell - Three Billboards Outside Ebbing, Missouri"],
    "Sam Rockwell - Three Billboards Outside Ebbing, Missouri"),
    new Question('Which actress won Best Supporting Actress?',
    ["Mary J. Blige - Mudbound", "Allison Janney - I, Tonya", "Lesley Manville - Phantom Thread", "Laurie Metcalf - Lady Bird", "Octavia Spencer - The Shape Of Water"],
    "Allison Janney - I, Tonya"),
    new Question('Which movie won Best Animated Feature Film?',
    ["The Boss Baby", "The Breadwinner", "Coco", "Ferdinand", "Loving Vincent"],
    "Coco"),
    new Question('Which director won Best Director?',
    ["Dunkirk - Christopher Nolan", "Get Out - Jordan Peele", "Lady Bird - Greta Gerwig", "Phantom Thread - Paul Thomas Anderson", "The Shape Of Water - Guillermo Del Toro"],
    "The Shape Of Water - Guillermo Del Toro"),
    new Question("Which movie won Best Adapted Screenplay?",
    ["Call Me By Your Name", "The Disaster Artist", "Logan", "Molly's Game", "Mudbound"],
    "Call Me By Your Name"),
    new Question("Which movie won Best Original Screenplay?",
    ["The Big Sick", "Get Out", "Lady Bird", "The Shape Of Water", "Three Billboards Outside Ebbing, Missouri"],
    "Get Out"),
    new Question("Which movie won Best Original Score?",
    ["Dunkirk", "Phantom Thread", "The Shape Of Water", "Star Wars: The Last Jedi", "Three Billboards Outside Ebbing, Missouri"],
    "The Shape Of Water"),
    new Question("Which movie won Best Original Song?",
    ["Mudbound - Mighty River", "Call Me By Your Name - Mystery Of Love", "Coco - Remember Me", "Marshall - Stand Up For Something","The Greatest Showman - This Is Me"],
    "Coco - Remember Me"),
    new Question("Which movie won Best Cinematography?",
    ["Blade Runner 2049","Darkest Hour","Dunkirk","Mudbound", "The Shape Of Water"],
    "Blade Runner 2049"),
    new Question("Which movie won Best Costume Design?",
    ["Beauty And The Beast", "Darkest Hour", "Phantom Thread", "The Shape Of Water", "Victoria & Abdul"],
    "Phantom Thread"),
    new Question("Which movie won Best Makeup And Hairstyling?",
    ["Darkest Hour", "Victoria & Abdul", "Wonder"],
    "Darkest Hour"),
    new Question("Which movie won Best Production Design?",
    ["Beauty And The Beast", "Blade Runner 2049", "Darkest Hour", "Dunkirk", "The Shape Of Water"],
    "The Shape Of Water"),
    new Question("Which movie won Best Foreign Language Film?",
    ["A Fantastic Woman", "The Insult", "Loveless", "On Body and Soul", "The Square"],
    "A Fantastic Woman"),
    new Question("Which movie won Best Film Editing?",
    ["Baby Driver", "Dunkirk", "I, Tonya", "The Shape Of Water", "Three Billboards Outside Ebbing, Missouri"],
    "Dunkirk"),
    new Question("Which movie won Best Visual Effects?",
    ["Blade Runner 2049", "Guardians Of The Galaxy Vol. 2", "Kong: Skull Island", "Star Wars: The Last Jedi", "War For The Planet Of The Apes"],
    "Blade Runner 2049"),
    new Question("Which movie won Best Documentary Feature?",
    ["Abacus: Small Enough To Jail", "Face Places", "Icarus", "Last Men In Aleppo", "Strong Island"],
    "Icarus"),
    new Question("Which movie won Best Documentary Short Subject?",
    ["Edith+Eddie", "Heaven Is A Traffic Jam On The 405", "Heroin(e)", "Knife Skills", "Traffic Stop"],
    "Heaven Is A Traffic Jam On The 405"),
    new Question("Which movie won Best Sound Editing?",
    ["Baby Driver", "Blade Runner 2049", "Dunkirk", "The Shape Of Water", "Star Wars: The Last Jedi"],
    "Dunkirk"),
    new Question("Which movie won Best Sound Mixing?",
    ["Baby Driver", "Blade Runner 2049", "Dunkirk", "The Shape Of Water", "Star Wars: The Last Jedi"],
    "Dunkirk"),
    new Question("Which movie won Best Animated Short Film?",
    ["Dear Basketball", "Garden Party", "Lou", "Negative Space", "Revolting Rhymes"],
    "Dear Basketball"),
    new Question("Which movie won Best Live Action Short Film?",
    ["DeKalb Elementary", "The Eleven O'Clock", "My Nephew Emmett", "The Silent Child", "Watu Wote/All Of Us"],
    "The Silent Child")
];

const questionNumber = document.querySelector(".question-number");
const shortQuizButton = document.querySelector("#short-quiz");
const fullQuizButton = document.querySelector("#full-quiz");
const nextButton = document.querySelector(".next-btn");
const answers = document.querySelector(".answers");
const overlay = document.querySelector(".overlay");
const result = document.querySelector("#result");
const score = document.querySelector('#score');
const main = document.querySelector("main");
let currentQuiz = undefined;

function displayCurrentQuestion() {
    const currentQuestion = currentQuiz.getCurrentQuestion();
    document.querySelector(".question").textContent = currentQuestion.questionString;
    questionNumber.innerHTML = `Question ${currentQuiz.questionNum + 1}`;
    let answersList = document.createElement("ul");
    for (let i = 0; i < currentQuestion.answerChoices.length; i++) {
        let answersItem = document.createElement("li");
        let replacedItem = currentQuestion.answerChoices[i].split(" ").join("").replace(",","").replace(":","").replace(".","").replace("'","").replace("/","").toLowerCase();
        let indexOfDash = replacedItem.indexOf('-')
        if (indexOfDash >= 0) {
            replacedItem = replacedItem.substring(0,indexOfDash);   
        }
        replacedItem = `images/${replacedItem}.jpg`
        // console.log(indexOfDash, replacedItem);
        let image = document.createElement("img");
        image.setAttribute("src",replacedItem);
        answersItem.textContent = currentQuestion.answerChoices[i];
        answersItem.appendChild(image)
        answersList.appendChild(answersItem);
        //answersItem.appendChild(answerImage);
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
    currentQuiz = new Quiz(questions2018.slice(0,10));
    displayScore();
    displayCurrentQuestion();
    score.style.display = "block";
});

fullQuizButton.addEventListener('click',function(e) {
    e.preventDefault();
    currentQuiz = new Quiz(questions2018);
    displayScore();
    displayCurrentQuestion();
    score.style.display = "block";
});

nextButton.addEventListener('click',function(e) {
    currentQuiz.moveToNextQuestion();
    const finished = currentQuiz.isQuizFinished();
    console.log(finished);
    if (finished) {
        main.innerHTML = `<h2>You're done!</h2> <div class="final-score">Your Final Score was: 
        <br/> <span>${currentQuiz.score}/${currentQuiz.questions.length}</span></div>
        <div class="quiz-type-container"><a class="quiz-type-btn" href="index.html" >Dare to Try Again?</a></div>`;
        
    }
    displayCurrentQuestion();
    result.textContent = "";
    overlay.style.display = "none";
    answers.style = "pointer-events:auto;"
});

answers.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(currentQuiz.getCurrentQuestion());
    let answerValidity = currentQuiz.getCurrentQuestion().isAnswerCorrect(e.target.textContent);
    if (answerValidity) {
        currentQuiz.incrementScore();
        displayScore();
        result.textContent = "Well done! That's correct."
        overlay.style.display = "flex";
    } else { 
        result.innerHTML = `Incorrect, the actual answer was <br/>"${currentQuiz.getCurrentQuestion().actualAnswer}"`;
        overlay.style.display = "flex";
    }
    answers.style = "pointer-events:none;"
});