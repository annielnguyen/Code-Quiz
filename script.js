var timerElement = document.querySelector(".timer-count");
var startButton =  document.querySelector(".start_button")
var timerElement = document.querySelector(".timer-count");
var quiz_block   = document.querySelector(".Quiz");
var choices      = document.querySelectorAll(".choice-text");
var question     = document.querySelector("#question");
console.log(choices)
var timer;
var timerCount;

//Array of questions in quiz

//var questions = ["Inside which HTML element do we put the JavaScript?","Where is the correct place to insert a JavaScript?","What is the correct syntax for referring to an external script called 'xxx.js'?"];
const myQuestions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      answers: {
        a: '<script>',     
        b: '<scripting>',
        c: '<js>',
        d: '<javascript>'
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
// The startGame function is called when the start button is clicked
function startGame() {
    timerCount = 100;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    question.textContent = myQuestions[0]["question"]
    for(var i = 0 ; i < choices.length ; ++i){
        var question_idx = String.fromCharCode(97 + i)
        choices[i].textContent = myQuestions[0]["answers"][question_idx]
    }
    quiz_block.style.display = "block"
    startButton.innerText = "Quit Quiz"
    startTimer()
  }

  //Creating timer 
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0) {
          clearInterval(timer);
      }
    }, 1000);
  }

  // Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);