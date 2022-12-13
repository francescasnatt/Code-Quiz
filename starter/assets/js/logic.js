// ACTION click the start button ***
// CONSEQUENCE removes existing tags on the page
// CONSEQUENCE displays the first question and 4 answer choices on the page
// CONSEQUENCE starts the timer on the side of the screen

// HOW
// create a displayNextQuestion() function
    // targets elements on page and makes textContent = "" (removes content)
    // creates elements for question and answers using document.createElement()
    // adds text content to each element to contain question and 4 choices using element.textContent
    // adds each element to page using parentElement.appendChild()

// target the button with document.querySelector
// add event listener so when button is clicked a function is called
    // function:
    // targets elements on page and makes textContent = "" (removes content)
    // creates elements for question and answers using document.createElement()
    // adds text content to each element to contain question and 4 choices using element.textContent
    // adds each element to page using parentElement.appendChild()
    // starts timer counting down from 75seconds (? - look up setInterval and clearInterval)

// CODE
let currentQuestionNo = 0;
let currentQuestionObject = questions[currentQuestionNo];
let startingTime = 75;
let interval;
let timerCount = document.getElementById('time');
// when user clicks answer
// currentQuestionObject++

// when click a button, check if correct or not. if correct, increment currentQuestionNo and run endOfGame function
// if not correct, increment Q no and check to see if currentQ is same as Q.length, run endofgame, if not, display next question

// ✅
function displayNextQuestion(){
    let questionTitleEl = document.querySelector("#question-title");
    questionTitleEl.textContent = currentQuestionObject.title;
    let choicesEl = document.querySelector('#choices');
    for (let i=0; i<currentQuestionObject.choices.length; i++){
        let choicesButton = document.createElement('button');
        choicesButton.textContent = currentQuestionObject.choices[i];
        choicesEl.appendChild(choicesButton);
    }
}

function startTimer(){
 interval = setInterval(() => {
    startingTime--;
    timerCount.textContent = startingTime;
    endOfGame();
 }, 1000);
}

function endOfGame(){
    if(startingTime <= 0 || currentQuestionNo === questions.length){
        clearInterval(interval);
    }
}

let startQuizButton = document.getElementById('start');
startQuizButton.addEventListener('click',() => {
    let startScreen = document.getElementById('start-screen');
    startScreen.classList.add('hide');
    let questionsEl = document.getElementById('questions');
    questionsEl.classList.remove('hide');
    displayNextQuestion();
    startTimer();
});

// ---------------------------------------------------------------------------------------

// ACTION click an answer button ***
// CONSEQUENCE removes the existing tags on the page
// if answer is correct CONSEQUENCE see alert "correct!", hear right sound and next question is displayed
// if answer is incorrect CONSEQUENCE see alert "wrong!", hear wrong sound, timer loses 15 seconds and next question is displayed

// HOW
// add event listener so when button is clicked a function is called
// function:
// if button.value === "*incorrect answer*" (? - how do I target all incorrect answers)
    // create element, add "wrong!" text content and add to page using appendchild
    // play "wrong" sound
    // time = -15 seconds
    // displayNextQuestion();

// else
    // create element, add "correct!" text content and add to page using appendchild
    // play "right" sound
    // targets elements on page and makes textContent = "" (removes content)
    // creates elements for question and answers using document.createElement()
    // adds text content to each element to contain question and 4 choices using element.textContent
    // adds each element to page using parentElement.appendChild() (? - how do I avoid repeating this code for each new question)

// CODE
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

let choicesButton = document.getElementsByClassName('.choices');
document.addEventListener('click', function(){
    // if(answer is incorrect){
    //     sfxWrong.play();

    // }
    // else{
    //     sfxRight.play();
    // }

});


// ---------------------------------------------------------------------------------------

// ACTION complete all questions OR timer = 0
// CONSEQUENCE removes existing tags on the page
// CONSEQUENCE end screen is displayed

// HOW
// if timer === 0 || (? - how to identify questions are complete)
    // function:
    // targets elements on page and makes textContent = "" (removes content)
    // creates elements for end screen using document.createElement()
    // adds text content to each element using element.textContent
    // adds each element to page using parentElement.appendChild()

// ---------------------------------------------------------------------------------------

// ACTION user enters initials
// CONSEQUENCE initials and score are stored in local storage
// CONSEQUENCE initials and score are rendered on the highscores page

// HOW
// use localStorage.setItem("lastname", "Smith");


// ---------------------------------------------------------------------------------------

// ACTION user clicks clear highscores button
// CONSEQUENCE removes highscore list elements on the page