var timerElement = document.querySelector(".timer-count");
var startButton =  document.querySelector(".start_button")
var timerElement = document.querySelector(".timer-count");
console.log(startButton)

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
        d: '<javascript>',
      },
      correctAnswer: "a"
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      answers: {
        a: "Both the <head> section and the <body> section are correct", 
        b: "The <head> section",
        c: "The <body> section",
      },
      correctAnswer: "a"
    },
    {
      question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      answers: {
        a: '<script name="xxx.js"',
        b: '<script src="xxx.js">', 
        c: '<script href="xxx.js"',
      correctAnswer: "b"
    }
  ];
// The startGame function is called when the start button is clicked
function startGame() {
    timerCount = 100;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
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