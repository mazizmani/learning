let count = 0

function cardCounter(card){
  if (card >= 2 && card <=6){
    count = count + 1
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A"){
    count = count - 1
  }
  /*} else if (card === "J"){
    count = count - 2
  } else if (card === "Q"){
    count = count - 3
  } else if (card === "K"){
    count = count - 4
  } else if (card === "A"){
    count = count - 5
  }*/
  if (count >= 1) {
    return count + " Bet"
  } else if (count <= 0) {
    return count + " Hold"
  }}

  console.log(cardCounter("A"));

