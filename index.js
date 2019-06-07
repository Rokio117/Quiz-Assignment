/* global STORE */
let currentQuestion = 1;
let arrayNum = currentQuestion - 1;
let userScore = 0;

function handleLetsGo() {
  $("#begin-button").click(function(event) {
    event.preventDefault();
    $("#page-1").toggleClass("hidden");
    $("#page-2").toggleClass("hidden");
    showQuestion();
    showAnswers();
    updateScore();
  });
}
function handleContinue() {
  $("#continue-button").click(function(event) {
    currentQuestion++;
    arrayNum++;
    event.preventDefault();
    if (currentQuestion <= STORE.length) {
      $("#page-3").toggleClass("hidden");
      $("#page-2").toggleClass("hidden");
    } else {

      $("#page-3").toggleClass("hidden");
      $("#page-4").toggleClass("hidden");
    }
    showQuestionNumber();
    showQuestion();
    showAnswers();
  });
}

function showQuestionNumber() {
  $(".number-of-questions").text(STORE.length);
  $("#final-score").text(userScore);
  $(".question-num").text(currentQuestion);
  //inputs the current question number into the 'question _ of 10 span
}

function updateScore() {
  $('.user-score').text(userScore)
}

function showQuestion() {
  $(".question").text(STORE[arrayNum].question);
}

function showAnswers() {
  $("#answer-A").text(STORE[arrayNum].answers.A);
  $(".answer-A-value").val(STORE[arrayNum].answers.A);

  $("#answer-B").text(STORE[arrayNum].answers.B);
  $(".answer-B-value").val(STORE[arrayNum].answers.B);

  $("#answer-C").text(STORE[arrayNum].answers.C);
  $(".answer-C-value").val(STORE[arrayNum].answers.C);

  $("#answer-D").text(STORE[arrayNum].answers.D);
  $(".answer-D-value").val(STORE[arrayNum].answers.D);
}

function handleSubmitAnswer() {
  $("#answer-area").submit(function(event) {
    event.preventDefault();
    answerText = $("input[name=question-name]:checked").val();
    handleAnswerValue(answerText);
    this.reset();
    $("#page-2").toggleClass("hidden");
    $("#page-3").toggleClass("hidden");
  });
}

function handleAnswerValue(answer) {
  if (answer !== STORE[arrayNum].correct) {
    $("#feedback").text(
      `Oops! The correct answer was ${STORE[arrayNum].correct}`
    );
  } else if (answer === STORE[arrayNum].correct) {
    userScore ++
    updateScore();
    $("#feedback").text("Congratulations! You chose the correct answer!");
  }
}
function handleRestartQuiz() {
  $("#play-again-button").click(function(event) {
    location.reload();
  });

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
