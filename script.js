$(document).ready(function(){

  var currentQuestion;

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

});
