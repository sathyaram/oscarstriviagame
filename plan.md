To Do
* // Replace Text Area with Q&A



Plan of Action
1__
* 1. Create the (Un)abridged Buttons 
* 2. Make Them Log something when clicked
2__
* 1. How to store all Questions + Answers
* 2. *Consider writing a class for Category
    Catogory
    - Question Itself (depends on Type of question) 
    - Nominees (list)
        -Image
        -Name
    - Correct Nominee


// User Enters Page
- Select Abridged Quiz (10 Questions) or Unabridged Quiz (24 Questions)
- Click Start Quiz
    - The Quiz is Started (See Questions Area)
- 
// Questions Area
- The Question (text)
    - Random Question appears of 1 of 24 Categories
- The Nominees (3-9)
    - Who Question
        - Who Picture (Actor/Actress)
        - Who Name
    - What Question
        - What Picture (Movie Poster/Still)
        - What Name
        - Date Release
- User Submits
    - In Modal
        - If Right: You are Correct
        - If Wrong: You are Incorrect
            - Show the Right Answer
    - User Dismisses Modal, next Question shows
- Trivia Finish
    -In Modal
        - If > 20, Well styled Popup
        - If < 20, You did OK
        - If < 10, Tune into the Oscars, man
        - If < 5, Don't Tell Anyone You Took this Quiz
// Right Sidebar
- Area where Score is kept throughout Questions
- Depending on Right/Wrong, Score is updated

// Design
- Quiz: A list of questions
    - Abbreivated Quiz
        - Question
            -Question
            -Answer Choices
                -Image
                -Text
            -Selected Answer
            -Actual Answer
    - Full Quiz
    - Score
    - Current Questions / Total Questions
    - Result Summary

// User Stories
* 0) Show Welcome Text
* 1) User Sees Two Buttons
* 2) User Picks one of two Buttons
* 3) Quiz Initializes
* 3a) User reads first question
* 4) User sees answer selection
* 5) User chooses answer
* 6) User sees result of question
* 7) User sees score update
* 8) User is able to click next (to next question)
* 9) After all Questions are Answered
* 10) User sees results of Quiz 

// Store Questions + Answer

// Browser Local Storage
