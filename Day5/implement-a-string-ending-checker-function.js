function confirmEnding(str1, str2){
const name = str1;
const endQuestion = str2;
const lengthOfEnd = endQuestion.length;
const endOfName = name.slice(-lengthOfEnd);
  if (endOfName == endQuestion) {
    return true
  } else {
    return false
  }
};
//Testing area.
const name = "Bastian"; 
const endQuestion = "tian";
const lengthOfEnd = endQuestion.length;
const endOfName = name.slice(-lengthOfEnd)

console.log(confirmEnding("Connor", "r"))


