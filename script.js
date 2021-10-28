$(document).ready(function(){

  var currentQuestion;
  var timeLeft = 10;
  var interval;
  var score = 0;

  function randomNumberGenerator(max) {
  return Math.floor(Math.random() * max);
  }

  var checkAnswer = function (correctAnswer, userAnswer) {

    if (correctAnswer == userAnswer)
      return true;
    }

  var questionGenerator = function () {
    var question = {};
    var num1 = randomNumberGenerator(10);
    var num2 = randomNumberGenerator(10);

    question.answer = num1 + num2;
    question.equation = String(num1) + " + " + String(num2);

    return question;
  }

  currentQuestion = questionGenerator();
  $('#equation').text(currentQuestion.equation);

  var renderNewQuestion = function () {
    currentQuestion = questionGenerator();
    $('#equation').text(currentQuestion.equation);
  }

 $('#user-input').on('keyup', function () {
   console.log($(this).val());
  });

  var checkAnswer = function (userInput, answer) {
    if(userInput === answer) {
      renderNewQuestion();
       $('#user-input').val('');
       updateTimeLeft(+1);
       updateScore(+1);
    }
  }

  var startGame = function () {
    if (!interval) {

        if (timeLeft === 0) {
          updateTimeLeft(10);
        }
        interval = setInterval(function () {
          updateTimeLeft(-1);
          if (timeLeft === 0) {
            clearInterval(interval);
            interval = undefined;
          }
      }, 1000);
    }
  }

  $('#user-input').on('keyup', function () {
    startGame();
    checkAnswer(Number($(this).val()), currentQuestion.answer);
  });

/*
  var interval = setInterval(function () {
    updateTimeLeft(-1);
    if (timeLeft === 0) {
      clearInterval(interval);
    }
    console.log(timeLeft);
  }, 1000);
*/

  var updateTimeLeft = function (amount) {
    timeLeft += amount;
    $('#time-left').text(timeLeft);
  }

  var updateScore = function (amount) {
    score += amount;
    $('#score').text(score);
  };

  renderNewQuestion();
});
