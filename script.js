const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

const num1 = Math.trunc(Math.random() * 9 + 1);
const num2 = Math.trunc(Math.random() * 9 + 1);

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

const correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

formEl.addEventListener("submit", function () {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

scoreEl.innerText = `Score : ${score}`;

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
