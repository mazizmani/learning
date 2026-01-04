const questions = [
  { category: "History", question: "Who was the first President of the United States?", choices: [ "Thomas Jefferson", "Abraham Lincoln", "George Washington" ], answer: "George Washington" },
  { category: "Math", question: "What is the value of 7 × 8?", choices: [ "54", "56", "58" ], answer: "56" },
  { category: "Gaming", question: "What company created the PlayStation?", choices: [ "Sony", "Nintendo", "Microsoft" ], answer: "Sony" },
  { category: "Brands", question: "Which brand's logo is a bitten apple?", choices: [ "Samsung", "Apple", "Huawei" ], answer: "Apple" },
  { category: "Celebrities", question: "Who starred as Iron Man in the Marvel movies?", choices: [ "Chris Evans", "Robert Downey Jr.", "Mark Ruffalo" ], answer: "Robert Downey Jr." },
];

function getRandomQuestion(arr){
  const randomQuestion = arr[Math.floor(Math.random() * arr.length)]
  return randomQuestion
};

function getRandomComputerChoice(arr){
  const randomChoice = arr[Math.floor(Math.random() * arr.length)]
  return randomChoice
};

function getResults(ans, ran){
  if (ans.answer === ran){
    return "The computer's choice is correct!"
  } else return "The computer's choice is wrong. The correct answer is: " + ans.answer
};
console.log(getResults(questions[0], getRandomComputerChoice(questions[0].choices)))