let currentQuestion = 1

function handleLetsGo() {
  $('#begin-button').click(function(event) {
    event.preventDefault();
    console.log('handleLetsGo Ran');
    $('#page-1').toggleClass("hidden");
    $('#page-2').toggleClass("hidden");
  })
  
}
function handleContinue() {
  $('#continue-button').click(function(event){
    currentQuestion++
    console.log(currentQuestion);
    event.preventDefault();
    console.log('handleContinue Ran');
    if (currentQuestion <= 10) {
      $('#page-3').toggleClass("hidden");
      $('#page-2').toggleClass("hidden");
      }
    else {
      $('#page-3').toggleClass("hidden");
      $('#page-4').toggleClass("hidden");
    }
    showQuestionNumber();
  })
}

function showQuestionNumber() {
  console.log('showQuestionNumber ran');
  $('.question-num').text(currentQuestion)
  //inputs the current question number into the 'question _ of 10 span
}

function updateScore() {
  console.log('updateScore ran');
  //updates the user's current score in the Score: _/10 span
}

function showQuestion() {
  console.log('showQuestion ran');
  //updates the text of question to the one the user should be on
}

function showAnswers() {
  console.log('showAnswers ran');
  //updates the text of each answer to fit the question the user is currently on
}

function handleSubmitAnswer() {
  $('.question-submit').click(function(event) {
    console.log('submitAnswer ran');
    event.preventDefault();
    $('#page-2').toggleClass("hidden");
    $('#page-3').toggleClass("hidden");
  })
  
  //updates user score on page and in object array
  //generates appropriate text for next page depending on user answer
  //sends user to result page
}

function showNextQuestion() {
  console.log('showNextQuestion ran');
  //Sets question and answer text for the next page? (or do we want submitAnswer to do this?
  //sends user to next question page
  //if question 10, sends user to final score page
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



