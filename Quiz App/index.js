const quizes = [
  {
    title: "In which Italian city can you find the Colosseum?",
    correct_index: 0,
    answers: ["Venice", "Rome", "Naples", "Milan"],
  },
  {
    title: "What is the largest canyon in the world?",
    correct_index: 2,
    answers: ["Venice", "Rome", "Naples", "Milan"],
  },
  {
    title: "In the TV show New Girl, which actress plays Jessica Day?",
    correct_index: 3,
    answers: ["Venice", "Rome", "Naples", "Milan"],
  },
];

// Select elements
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const nextBtn = document.getElementById("next-btn");
const scoreScreen = document.getElementById("score-screen");
const quizNo = document.getElementById("quiz-no");
const quizTitle = document.getElementById("quiz-title");
const answerBtns = document.getElementsByClassName("answer-btn");
const precentage = document.getElementById("precentage");

let curr_quiz = 0;
let currect_ans = 0;

// Event Listners
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  nextQuestion();
});

nextBtn.addEventListener("click", nextQuestion);

for (let btn of answerBtns) {
  btn.addEventListener("click", submitAnswer);
}

function disableAllBtns() {
  for (let btn of answerBtns) {
    btn.setAttribute("disabled", "true");
  }
}

function enableAllBtns() {
  for (let btn of answerBtns) {
    btn.removeAttribute("disabled", "true");
  }
}

function submitAnswer(event) {
  console.log(event);
  const selectedAns = event.target.dataset.qno;
  const question = quizes[curr_quiz - 1].correct_index;

  if (selectedAns == question) {
    event.target.classList.add("correct");
    currect_ans++;
  } else {
    event.target.classList.add("wrong");
  }

  disableAllBtns();
}

function nextQuestion() {
  // Clear classes
  for (let btn of answerBtns) {
    btn.classList.remove("correct");
    btn.classList.remove("wrong");
  }

  enableAllBtns();
  if (curr_quiz > quizes.length - 1) {
    showScore();
    return;
  }

  const question = quizes[curr_quiz];
  quizTitle.innerText = question.title;

  //   answerBtns[0].innerText = question.answers[0];
  //   answerBtns[1].innerText = question.answers[1];
  //   answerBtns[2].innerText = question.answers[2];
  //   answerBtns[3].innerText = question.answers[3];

  //   loop answers
  for (let i = 0; i < 4; i++) {
    answerBtns[i].innerText = question.answers[i];
    answerBtns[i].dataset.qno = i;
  }

  curr_quiz++;
}

function showScore() {
  console.log(currect_ans);

  precentage.innerText = `${Math.round(
    (currect_ans / quizes.length) * 100
  )} % `;
  quizScreen.classList.add("hidden");
  scoreScreen.classList.remove("hidden");
}
