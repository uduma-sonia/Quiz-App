function check() {
  const question1 = document.quiz.q1.value;
  const question2 = document.quiz.q2.value;
  const question3 = document.quiz.q3.value;
  const question4 = document.quiz.q4.value;
  const question5 = document.quiz.q5.value;
  const question6 = document.quiz.q6.value;
  const question7 = document.quiz.q7.value;
  const question8 = document.quiz.q8.value;
  const question9 = document.quiz.q9.value;
  const question10 = document.quiz.q10.value;

  let correct = 0;

  if (question1 == "Eugene") {
    correct++;
  }
  if (question2 == "star") {
    correct++;
  }
  if (question3 == "texas") {
    correct++;
  }
  if (question4 == "Anchor") {
    correct++;
  }
  if (question5 == "gary") {
    correct++;
  }
  if (question6 == "octopus") {
    correct++;
  }
  if (question7 == "clarinet") {
    correct++;
  }
  if (question8 == "8") {
    correct++;
  }
  if (question9 == "sponge") {
    correct++;
  }
  if (question10 == "mermaid") {
    correct++;
  }

  const messages = [
    "very good!",
    "better luck next time",
    "you need to do better!",
  ];

  const pictures = ["img/spongebob.gif", "img/boredS.gif", "img/images.jpg"];

  let range;

  if (correct <= 3) {
    range = 2;
  }
  if (correct > 3 && correct < 7) {
    range = 1;
  }
  if (correct >= 7) {
    range = 0;
  }

  document.getElementById("after-submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[range];

  document.getElementById(
    "number-correct"
  ).innerHTML = `You got ${correct} out of 10 correct`;

  document.getElementById("picture").src = pictures[range];
}
