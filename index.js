var readlinesync = require("readline-sync")

var userName = readlinesync.question("Enter your Name: ")
console.log("hello " + userName + "! Welcome to CRICKET QUIZ..check your cricket knowledge")
var score = 0;
console.log("__________________")
function cricQuiz(question, answer) {     
  var userAnswer = readlinesync.question(question)

  if (answer.toUpperCase() === userAnswer.toUpperCase()) {   
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");
    score = score - 1;
  }
  console.log("your score:" + score)
  console.log(".......");
}


var cricQuestions = [
  {
    question: "which batsman have most runs in International Cricket?Sachin tendulakar/Virat Kohli->",
    answer: "Sachin tendulkar",
  },
  {
    question: "where is cricket stadium 'Eden Gardens' located?Kolkata/Mumbai->",
    answer: "Kolkata",
  },
  {
    question: "which team won T20 world cup in 2022?England/Pakistan->",
    answer: "England",
  },
  {
    question: "which team is winner of IPL2021?GT/RR->",
    answer: "GT",
  },
  {
    question: "In which year India won ODI Worldcup?2007/2011->",
    answer: "2011",
  },
  {
    question: "In which year India won T20 Worldcup?2007/2011->",
    answer: "2007",

  },
  {
    question: "which bowler has most wickets in International cricket?muralidaran/shane warne->",
    answer: "muralidaran",

  },
  {
    question: "which player has most catches in International cricket?jayawardane/AB develliers->",

    answer: "jayawardane",

  }
]

for (var i = 0; i < cricQuestions.length; i++) {
  var currentQuestion = cricQuestions[i];
  cricQuiz(currentQuestion.question, currentQuestion.answer)
}

console.log("Your Total score:" + score)







