var timerElement = document.querySelector(".timer-count");
var startButton =  document.querySelector(".start_button")
var timerElement = document.querySelector(".timer-count");
var quiz_block   = document.querySelector(".Quiz");
var choices      = document.querySelectorAll(".choice-text");
var question     = document.querySelector("#question");
var timer;
var timerCount;
var currQ;
var initialScore  =document.querySelector(".Initials_area");
var submitButton  =document.querySelector("#submit");
var submitInput   =document.querySelector(".submit_input");
var scoreList     =document.querySelector(".High-Score");







window.addEventListener('load', (event) => {
  fillTableOnStart(); 
});


function fillTableOnStart(){
  var items = localStorage.getItem("Scores");
  if (items == null){
    return;
  }else {
    fillTable(JSON.parse(items), 5);
  }
}

function fillTable(scores, end){
  topscores =  " <tr><th>Name</th><th>Score</th></tr>"
  for(var i =0 ; i < scores.length ; ++i){
    topscores += "<tr>"
    topscores += "<th>" + scores[i]["name"] + "</th>" +  "<th>" + String(scores[i]["score"]) + "</th>"
    topscores += "</tr>"
    if ( i == end-1) break;
  }
  scoreList.innerHTML = topscores
}


function displayTopScores(items){

  items.sort(function(a,b){
    return b.score - a.score
  });
  fillTable(items,5)
}

function manageStore(new_score){
  var item = localStorage.getItem("Scores");
  if(item != null)
  {
    var items = JSON.parse(item)
    items.push(new_score)
  } else {
    var items = [new_score]
  }

  displayTopScores(items)
  localStorage.setItem("Scores",JSON.stringify(items))
}

function addScore(){
  var name = submitInput.value;
  //var items = localStorage.getItem("Names");
  //var scores= localStorage.getItem("Scores");
  new_score = {name: name , score: timerCount};
  console.log(timerCount)
  manageStore(new_score)
  initialScore.style.display = "None"
  startButton.disabled = false
}



submitButton.addEventListener("click", addScore)
    
    

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
/*checks to see if answer is correct; will deduct time if answer is incorrect */

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
// brings up the next question in the quiz
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
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    currQ = 0
    updateQuestion();
    quiz_block.style.display = "block"
    startTimer()
  }

  //Creating timer 
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      
      timerCount--;
      timerElement.textContent = timerCount;
      if (currQ == myQuestions.length){
           clearInterval(timer);
           displayScore();
      } // setTimeout
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