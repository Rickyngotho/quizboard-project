function check() {

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var correct = 0;

  if (question1 == "is a programming language") {
    correct++;
  }
  if (question2 == "ECMAScripts") {
    correct++;
  }
  if (question3 == "The head section") {
    correct++;
  }
  if (question4 == "true") {
    correct++;
  }
  if (question5 == "variable") {
    correct++;
  }
  var messages = ["Great job!", "Good Job", "Fair Job", "Need to do better", "Try again"];
  var pictures = ["img/win.webp", "img/meh.webp", "img/lose.webp"];

  var score;
  if (correct < 1) {
    score = 4;
  }

  if (correct > 0 && correct < 5) {
    score = 1;
  }

  if (correct > 4) {
    score = 0;
  }
  document.getElementById("after_submit").style.visibiliy = "visible";

  document.getElementById("message").innerHTML = messages[score];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[score];
}
