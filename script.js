const guessContainer = document.querySelector("#guesses-container");
const newRandomNumberButton = document.querySelector(
  "#new-random-number-button"
);

function binarySearch() {
  guessContainer.textContent = "";
  const array = Array.from({ length: 1000000 }, (_, index) => index + 1);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const target = getRandomInt(1000000);

  let bottom = 0;
  let top = array.length - 1;
  let guessNumber = 0;
  let rangeLine = document.createElement("h2");
  rangeLine.textContent = `The range is ${bottom} - ${top}`;
  let targetLine = document.createElement("h1");
  targetLine.textContent = `The target is ${target}`;

  guessContainer.appendChild(targetLine);

  guessContainer.appendChild(rangeLine);
  while (bottom <= top) {
    let middle = Math.floor((top + bottom) / 2);
    let guess = array[middle];
    if (guess === target) {
      let hoorayLine = document.createElement("h1");
      hoorayLine.textContent = `${target} found`;

      hoorayLine.style.backgroundColor = "darkseagreen";
      hoorayLine.classList.add("fade-in");
      guessContainer.appendChild(hoorayLine);
      setTimeout(() => {
        hoorayLine.style.opacity = 1;
      }, 100 * guessNumber);

      return middle;
    } else if (guess < target) {
      guessNumber++;
      const tooLowLine = document.createElement("h2");
      tooLowLine.textContent = `Guess ${guessNumber}: ${guess} was too low`;
      tooLowLine.style.backgroundColor = "lightblue";
      tooLowLine.classList.add("fade-in");
      guessContainer.appendChild(tooLowLine);
      setTimeout(() => {
        tooLowLine.style.opacity = 1;
      }, 100 * guessNumber);

      bottom = middle + 1;
    } else {
      guessNumber++;

      const tooHighLine = document.createElement("h2");
      tooHighLine.textContent = `Guess ${guessNumber}: ${guess} was too high`;
      tooHighLine.style.backgroundColor = "indianred";
      tooHighLine.classList.add("fade-in");
      guessContainer.appendChild(tooHighLine);
      setTimeout(() => {
        tooHighLine.style.opacity = 1;
      }, 100 * guessNumber);

      top = middle - 1;
    }
  }
  return -1;
}

newRandomNumberButton.addEventListener("click", binarySearch);