$(document).ready(function(){

  function getRandomInt(max) {
  return Math.floor(Math.random() * max);
  }

  var checkAnswer = function (correctAnswer, userAnswer) {

    if (correctAnswer == userAnswer)
      return true;
  }

  var addNumbers = function () {

    var num1 = getRandomInt(10);
    var num2 = getRandomInt(10);
    var correctAnswer = num1 + num2;

    $('#userInput').on('keyup', function () {
      var userAnswer = $(this).val();
      console.log(userAnswer);
      var results = checkAnswer(correctAnswer, userAnswer);

      if (results)
      {
        $('#mathEquation').append('<p>Correct</p>');
      }

    });

    $('#mathEquation').append('<p>' + num1 + ' + ' + num2 + ' = ' + correctAnswer + '</p>');

  }

  //$('#userInput').on('keyup', function () {
  //  console.log($(this).val());
 // });

 addNumbers();

});
