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
let currentTime = 75;
let interval;
let timerCount = document.getElementById('time');
let choicesButton;

let currentQuestionAnswer = currentQuestionObject.answer.valueOf;

// when user clicks answer
// currentQuestionObject++

// when click a button, check if correct or not. if correct, increment currentQuestionNo and run endOfGame function
// if not correct, increment Q no and check to see if currentQ is same as Q.length, run endofgame, if not, display next question

function displayNextQuestion(){
    let questionTitleEl = document.querySelector("#question-title");
    questionTitleEl.textContent = currentQuestionObject.title;
    let choicesEl = document.querySelector('#choices');
    for (let i=0; i<currentQuestionObject.choices.length; i++){
        choicesButton = document.createElement('button');
        choicesButton.textContent = currentQuestionObject.choices[i];
        choicesEl.appendChild(choicesButton);
    }

    choicesButton.addEventListener('click', function(){
        if(choicesButton.textContent !== currentQuestionAnswer){
            sfxWrong.play();
            // they see "wrong!"
            let alert = questionsEl.createElement('p');
            alert.textContent = "Wrong!";
            questionsEl.appendChild(alert);
            // timer drops 15 secs
            currentTime-15;
            // display next Q
            displayNextQuestion();
        }
        else{
            sfxRight.play();
            // they see "correct!"
            let alert = questionsEl.createElement('p');
            alert.textContent = "Correct!";
            questionsEl.appendChild(alert);
            // display next Q
            displayNextQuestion();
        }
    
    });

}

function startTimer(){
 interval = setInterval(() => {
    currentTime--;
    timerCount.textContent = currentTime;
    endOfGame();
 }, 1000);
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
    /// displayNextQuestion();

// CODE
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

// choicesButton = document.createElement('button');
// how to reference variable defined inside a function? askBCS



// ---------------------------------------------------------------------------------------

// ACTION complete all questions OR timer = 0
// CONSEQUENCE removes existing tags on the page
// CONSEQUENCE end screen is displayed

// HOW
// if timer === 0 || (? - how to identify questions are complete)
    // function:
    // stops timer
    // shows end screen


// CODE
function endOfGame(){
    if(currentTime <= 0 || currentQuestionNo === questions.length){
        // stop timer
        clearInterval(interval);
        // show end screen
        questionsEl.classList.add('hide');
        let endScreen = document.getElementById('end-screen');
        endScreen.classList.remove('hide');
    }
}

// ---------------------------------------------------------------------------------------

// ACTION user enters initials
// CONSEQUENCE initials and score are stored in local storage
// CONSEQUENCE initials and score are rendered on the highscores page

// HOW
// use localStorage.setItem("lastname", "Smith");

// CODE
let submitButton = document.getElementById('submit');
let initials = localStorage.getItem('initials');

submitButton.addEventListener('click', function(){
    // save initials to localstorage
    localStorage.setItem("initials", initials);
    // go to highscores page ("highscores.html")
    let endScreen = document.getElementById('end-screen');
    endScreen.classList.add('hide');
    location.href = "highscores.html";
});

// show initials on highscores page:
let highscoresList = 
let highscoresListItem = document.createElement('li');
highscoresListItem.textContent = initials;



// ---------------------------------------------------------------------------------------

// ACTION user clicks clear highscores button
// CONSEQUENCE removes highscore list elements on the page
function clearHighscoresList(){
    
}

let clearHighscoresButton = getElementById('clear');
clearHighscoresButton.on('click', clearHighscoresList);