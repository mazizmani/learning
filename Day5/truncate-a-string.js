
function truncateString(str, num){  //This function will take a string you put into it along with a number 
  const num1 = num
  if(str.length <= num1){
    return str
  } else {
    const editedText = str.slice(0, num1)
    return editedText + "..."
}};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))





