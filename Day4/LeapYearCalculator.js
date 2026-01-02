let year = 4000 
function isLeapYear(num){
  if (num % 4 === 0 && num % 100 === 0 && num % 400 === 0){
    return num + " is a leap year."
  } else if (num % 4 === 0 && num % 100 === 0){
    return num + " is not a leap year."
  } else if (num % 4 === 0){
    return num + " is a leap year."
  } else if (num % 4 !== 0){
    return num + " is not a leap year."
  }}

const result = isLeapYear(year)

console.log(result)