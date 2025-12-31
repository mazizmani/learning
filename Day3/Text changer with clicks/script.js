
const options = [
  "I also like to code.",
  "I'm not sure if I told you this, but I like apples.",
  "This is project is made using JavaScript",
  "I do like pears aswell"
]; 


const textElement = document.getElementById("text");
const switchBtn = document.getElementById("switchBtn");

let lastIndex = -1; // start with -1 so anything is allowed first

switchBtn.addEventListener("click", function () {
 let randomOption;
do {
  randomOption = Math.floor(Math.random() * options.length); 
} while (randomOption === lastIndex);
textElement.textContent = options[randomOption];
lastIndex = randomOption;
});

/*so here, it chooses a random sentence (1-4), and then stores the sentences index in the lastIndex variable
and with the while function if the random sentences index matches the one stored in the lastIndex variable it repeats
until it outputs another index in the array.*/