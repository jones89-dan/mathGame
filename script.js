$(document).ready(function(){

  var currentQuestion;
  var timeLeft = 10;
  var interval;
  var score = 0;
  var topScore = 0;

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
    const getOperator = function() {
        let operators = [];
        if (addition.checked === true) {
            operators.push('+');
        }
        if (subtraction.checked === true) {
            operators.push('-');
        }
        if (multiplication.checked === true) {
            operators.push('*');
        }
        if (division.checked === true) {
            operators.push('/');
        }
        if (operators.length === 0) {
            operator = '+';
        } else if (operators.length === 1) {
            operator = operators[0];
        } else {
            let i = Math.floor(Math.random() * operators.length);
            operator = operators[i];
        }
        return operator;
    }

    let num3 = num1 * num2;

    getOperator();
        if (operator === '+') {
            question.answer = num1 + num2;
            question.equation = String(num1) + operator + String(num2);
        } else if (operator === '-') {
          if (num1 < num2) {
            question.answer = num2 - num1;
            question.equation = String(num2) + operator + String(num1);
          }
          else {
            question.answer = num1 - num2;
            question.equation = String(num1) + operator + String(num2);
          }
        } else if (operator === '*') {
            question.answer = num1 * num2;
            question.equation = String(num1) + operator + String(num2);
        } else if (operator === '/') {
            question.answer = num3 / num1;
            question.equation = String(num3) + operator + String(num1);
        }

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
          updateScore(-score);
        }
        interval = setInterval(function () {
          updateTimeLeft(-1);
          if (timeLeft === 0) {
            clearInterval(interval);
            interval = undefined;
            getHighScore();
          }
      }, 1000);
    }
  }

  $('#user-input').on('keyup', function () {
    startGame();
    checkAnswer(Number($(this).val()), currentQuestion.answer);
  });


  var updateTimeLeft = function (amount) {
    timeLeft += amount;
    $('#time-left').text(timeLeft);
  }

  var updateScore = function (amount) {
    score += amount;
    $('#score').text(score);

  };

  var getHighScore = function () {
        if (score > topScore) {
            topScore = score;
        }
        $('#high-score').text(topScore);
    }

  renderNewQuestion();
});
