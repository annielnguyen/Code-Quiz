var timerElement = document.querySelector(".timer-count");
var startButton =  document.querySelector(".start_button")
var timerElement = document.querySelector(".timer-count");
var quiz_block   = document.querySelector(".Quiz");
var choices      = document.querySelectorAll(".choice-text");
var question     = document.querySelector("#question");
console.log(choices)
var timer;
var timerCount;
var currQ;
var initialScore  =document.querySelector(".Initials_area");

console.log(initialScore)
    
    

//Array of questions in quiz
const myQuestions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      answers: {
        a: '<script>',     
        b: '<scripting>',
        c: '<js>',
      },
      correctAnswer: "a"
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      answers: {
        a: "Both the <head> section and the <body> section are correct", 
        b: "The <head> section",
        c: "The <body> section"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      answers: {
        a: '<script name="xxx.js">',
        b: '<script src="xxx.js">', 
        c: '<script href="xxx.js">'
      },
      correctAnswer: "b"
    },
    {
        question: "How do you write 'Hello World' in an alert box??",
        answers: {
          a: 'msg("Hello World");',
          b: 'alertBox("Hello World");', 
          c: 'alert("Hello World");'

        },
        correctAnswer: "c"
    },
    {
         question: "How to write an IF statement in JavaScript?",
        answers: {
           a: 'if (i == 5)',
           b: 'if i == 5 then', 
           c: 'if i = 5'
    
        },
        correctAnswer: "a"
        }
];

for (var i =0; i < choices.length; i++) {
    choices[i].addEventListener("click", function(event) {
        var ans = event.target.getAttribute("data-number");
        if (myQuestions[currQ]["correctAnswer"] == ans ){
            event.target.style.color = "Green";
        } else{
            event.target.style.color = "Red";
            timerCount -= 10;
        }
        currQ += 1
        var timer = setInterval(function(){
            updateQuestion();
            clearInterval(timer);
        },1000);

    });
}

function updateQuestion(){
  if (currQ<myQuestions.length){
    question.textContent = myQuestions[currQ]["question"]
    for(var i = 0 ; i < choices.length ; ++i){
        choices[i].style.color = "black"
        var question_idx = String.fromCharCode(97 + i)
        choices[i].textContent = myQuestions[currQ]["answers"][question_idx]
  }}
}

// The startGame function is called when the start button is clicked
function startGame() {
    timerCount = 100;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    currQ = 0
    updateQuestion();
    quiz_block.style.display = "block"
    startButton.innerText = "Quit Quiz"
    startTimer()
  }

  //Creating timer 
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      // setTimeout
      timerCount--;
      timerElement.textContent = timerCount;
      if (currQ == myQuestions.length){
           clearInterval(timer);
           displayScore();
      }
      if (timerCount === 0) {
          clearInterval(timer);
          displayScore();
      }
    }, 1000);
  }
function displayScore(){
  quiz_block.style.display  = "none";
  initialScore.style.display= "block";
}
  // Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);