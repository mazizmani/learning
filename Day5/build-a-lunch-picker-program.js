const lunches = [];

function addLunchToEnd(arr, str){
  arr.push(str)
  const modifiedEnd = arr 
  console.log(`${str} added to the end of the lunch menu.`)
  return modifiedEnd
};

function addLunchToStart(arr, str){
  arr.unshift(str)
  const modifiedStart = arr
  console.log(`${str} added to the start of the lunch menu.`)
  return modifiedStart
};

function removeLastLunch(arr){
  if(arr.length <= 0){
    console.log("No lunches to remove.")
  } else {
    const removedItem = arr.pop()
    const updatedMenu = arr
    console.log(`${removedItem} removed from the end of the lunch menu.`)
    return updatedMenu
  }
};

function removeFirstLunch(arr){
  if(arr.length <= 0){
    console.log("No lunches to remove.")
  } else {
    const removedItem = arr.shift()
    const updatedMenu = arr
    console.log(`${removedItem} removed from the start of the lunch menu.`)
    return updatedMenu
  }
};

function getRandomLunch(arr){
  if(arr.length <= 0){
    console.log("No lunches available.")
  } else {
    const randomLunch = arr[Math.floor(Math.random() * arr.length)]
    console.log(`Randomly selected lunch: ${randomLunch}`)
  }
};

function showLunchMenu(arr){
  if(arr.length <= 0){
    console.log("The menu is empty.")
  } else {
    console.log(`Menu items: ${arr.join(", ")}`)
  }
};

console.log(showLunchMenu(["Greens", "Corns", "Beans"]))


