const guessContainer = document.querySelector("#guesses-container");
const newRandomNumberButton = document.querySelector(
  "#new-random-number-button"
);

function binarySearch() {
  guessContainer.textContent = "";
  const array = Array.from({ length: 1000000 }, (_, index) => index + 1);
  console.log(array.length);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const target = getRandomInt(array.length);

  let bottom = 0;
  let top = array.length - 1;
  console.log(`top: ${top} | bottom ${bottom}`);
  let guessNumber = 0;
  let rangeLine = document.createElement("h2");
  rangeLine.textContent = `Starting range: 1 - 1000000`;
  rangeLine.style.backgroundColor = "lemonchiffon";
  let targetLine = document.createElement("h1");
  let targetSpan = document.createElement("span");
  targetSpan.style.backgroundColor = "darkseagreen";
  targetLine.textContent = `The target is: `;
  targetSpan.textContent = `${target}`;
  targetSpan.style.padding = "5px";
  targetSpan.style.borderRadius = "5px";
  targetLine.appendChild(targetSpan);

  guessContainer.appendChild(targetLine);

  guessContainer.appendChild(rangeLine);

  while (bottom <= top) {
    let middle = Math.floor((top + bottom) / 2);
    let guess = array[middle];

    if (guess === target) {
      let hoorayLine = document.createElement("h1");
      hoorayLine.textContent = `Guess ${guessNumber + 1}: ${target} found`;
      hoorayLine.style.backgroundColor = "darkseagreen";
      hoorayLine.style.padding = "5px";
      hoorayLine.style.borderRadius = "5px";
      hoorayLine.classList.add("fade-in");
      guessContainer.appendChild(hoorayLine);
      setTimeout(() => {
        hoorayLine.style.opacity = 1;
      }, 100 * guessNumber);

      return middle;
    } else if (guess < target) {
      guessNumber++;
      const tooLowLine = document.createElement("h2");
      tooLowLine.style.backgroundColor = "lightblue";
      tooLowLine.classList.add("fade-in");
      tooLowLine.textContent = `Guess ${guessNumber}: ${guess} - Too low`;
      const newRangeLine = document.createElement("h4");
      newRangeLine.classList.add("fade-in");

      guessContainer.appendChild(tooLowLine);
      guessContainer.appendChild(newRangeLine);
      setTimeout(() => {
        tooLowLine.style.opacity = 1;
      }, 100 * guessNumber);
      setTimeout(() => {
        newRangeLine.style.opacity = 1;
      }, 100 * guessNumber);
      bottom = middle + 1;

      newRangeLine.textContent = `\n\nNew Range: ${bottom + 1} - ${top + 1}`;
    } else {
      guessNumber++;
      const tooHighLine = document.createElement("h2");
      tooHighLine.textContent = `Guess ${guessNumber}: ${guess} - Too high`;
      tooHighLine.style.backgroundColor = "salmon";
      tooHighLine.classList.add("fade-in");
      const newRangeLine = document.createElement("h4");
      newRangeLine.classList.add("fade-in");

      guessContainer.appendChild(tooHighLine);
      guessContainer.appendChild(newRangeLine);
      setTimeout(() => {
        tooHighLine.style.opacity = 1;
      }, 100 * guessNumber);
      setTimeout(() => {
        newRangeLine.style.opacity = 1;
      }, 100 * guessNumber);
      top = middle - 1;
      newRangeLine.textContent = `\n\nNew Range: ${bottom + 1} - ${top + 1}`;
    }
  }

  return -1;
}

newRandomNumberButton.addEventListener("click", binarySearch);
