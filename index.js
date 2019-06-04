function resetButton() {
  console.log('resetButton ran');
  //Resets everything(all answers, score,question#), sends user back to intro page
}

function insertQuestionText() {
  console.log('insertQuestionText ran');
  //inputs the current question number into the 'question _ of 10 span
}

function updateScore() {
  console.log('updateScore ran');
  //updates the user's current score in the Score: _/10 span
}

function fillQuestion() {
  console.log('fillQuestion ran');
  //updates the text of question to the one the user should be on
}

function fillAnswers() {
  console.log('fillAnswers ran');
  //updates the text of each answer to fit the question the user is currently on
}

function submitAnswer() {
  console.log('submitAnswer ran');
  //updates user score on page and in object array
  //generates appropriate text for next page depending on user answer
  //sends user to result page
}

function continueButton() {
  console.log('continueButton ran');
  //Sets question and answer text for the next page? (or do we want submitAnswer to do this?
  //sends user to next question page
  //if question 10, sends user to final score page
}

function callAllFunctions() {
  resetButton();
  insertQuestionText();
  updateScore();
  fillQuestion();
  fillAnswers();
  submitAnswer();
  continueButton();
  //calls all functions
}

$(callAllFunctions);



