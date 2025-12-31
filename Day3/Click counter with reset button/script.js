let count = 0;

const countElement = document.getElementById("count");
const plusBtn = document.getElementById("plusBtn");
const resetBtn = document.getElementById("resetBtn");

plusBtn.addEventListener("click", function () {
  count = count + 1;
  countElement.textContent = count;
});

resetBtn.addEventListener("click", function () {
  count = count = 0;
  countElement.textContent = count;
});