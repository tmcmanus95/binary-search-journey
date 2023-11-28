const guessContainer = document.querySelector("#guesses-container");
const sortedArray = Array.from({ length: 1000000 }, (_, index) => index + 1);
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const target = getRandomInt(1000000);
let targetLine = document.createElement("h1");
targetLine.textContent = `The target is ${target}`;
guessContainer.appendChild(targetLine);
function binarySearch(array, target) {
  let bottom = 0;
  let top = array.length - 1;
  let guessNumber = 0;
  let rangeLine = document.createElement("h2");
  rangeLine.textContent = `The range is ${bottom} - ${top}`;
  guessContainer.appendChild(rangeLine);
  while (bottom <= top) {
    let middle = Math.floor((top + bottom) / 2);
    let guess = array[middle];
    if (guess === target) {
      return middle;
    } else if (guess < target) {
      guessNumber++;
      const tooLowLine = document.createElement("h2");
      tooLowLine.textContent = `Guess ${guessNumber}: ${guess} was too low`;
      tooLowLine.style.backgroundColor = "lightblue";
      guessContainer.appendChild(tooLowLine);
      bottom = middle + 1;
    } else {
      guessNumber++;

      const tooHighLine = document.createElement("h2");
      tooHighLine.textContent = `Guess ${guessNumber}: ${guess} was too high`;
      tooHighLine.style.backgroundColor = "indianred";

      guessContainer.appendChild(tooHighLine);
      top = middle - 1;
    }
  }
  return -1;
}

const result = binarySearch(sortedArray, target);

if (result !== -1) {
  console.log(`${target} found at index ${result}`);
  let hoorayLine = document.createElement("h1");
  hoorayLine.textContent = `${target} found`;
  guessContainer.appendChild(hoorayLine);
} else {
  console.log(`${target} not found in the array`);
}
