let currentQuestion = 1
let arrayNum = currentQuestion - 1
console.log(arrayNum);
function handleLetsGo() {
  $('#begin-button').click(function(event) {
    event.preventDefault();
    console.log('handleLetsGo Ran');
    $('#page-1').toggleClass("hidden");
    $('#page-2').toggleClass("hidden");
    showQuestion();
    showAnswers();
  })
  
}
function handleContinue() {
  $('#continue-button').click(function(event){
    currentQuestion++
    arrayNum++
    console.log(currentQuestion);
    console.log(arrayNum);
    event.preventDefault();
    console.log('handleContinue Ran');
    if (currentQuestion <= STORE.length) {
      $('#page-3').toggleClass("hidden");
      $('#page-2').toggleClass("hidden");
      }
    else {
      $('#page-3').toggleClass("hidden");
      $('#page-4').toggleClass("hidden");
    }
    showQuestionNumber();
    showQuestion();
    showAnswers();
  })  
}

function showQuestionNumber() {
  console.log('showQuestionNumber ran');
  $('.number-of-questions').text(STORE.length)
  $('.question-num').text(currentQuestion)
  //inputs the current question number into the 'question _ of 10 span
}

function updateScore() {
  console.log('updateScore ran');
  //updates the user's current score in the Score: _/10 span
}

function showQuestion() {
  console.log('showQuestion ran');
  $('.question').text(STORE[arrayNum].question);
}

function showAnswers() {
  console.log('showAnswers ran');
  $('#answer-A').text(STORE[arrayNum].answers.A)
  $('#answer-B').text(STORE[arrayNum].answers.B)
  $('#answer-C').text(STORE[arrayNum].answers.C)
  $('#answer-D').text(STORE[arrayNum].answers.D)
}

function handleSubmitAnswer() {
  console.log('handleSubmitAnswer ran');
  $('.question-submit').on(function(event) {
    event.preventDefault();
    $('#page-2').toggleClass("hidden");
    $('#page-3').toggleClass("hidden");
  })
}

function handleinCorrectAnswer() {
  //Changes text in feedback page to show what the correct answer was
  console.log('handleinCorrectAnswer Ran')
}
function handleRestartQuiz() {
  $('#play-again-button').click(function(event){
    console.log('resetQuiz ran');
    location.reload();
  })
  
  //Resets everything(all answers, score,question#), sends user back to intro screen
}

function startQuiz() {
  //calls functions that deal with user interactions
  handleRestartQuiz();
  handleSubmitAnswer();
  handleLetsGo();
  handleContinue();
  showQuestionNumber();
  
}

$(startQuiz);



