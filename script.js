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
    }

    incrementScore() {
        this.score++;
    }
}

let questions2018 = [
    new Question('Which actor won Best Actor?',
     ["Timothee Chalamet", "Daniel Day-Lewis", "Daniel Kaluuya", "Gary Oldman", "Denzel Washington"], 
     "Gary Oldman"),
    new Question('Which actress won Best Actress?',
     ["Sally Hawkins", "Frances McDormand", "Margot Robbie", "Saoirse Ronan", "Meryl Steep"],
      "Frances McDormand")
];





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