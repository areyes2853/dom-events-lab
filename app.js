
///////////////////////////////////
let currenInput = ""; // Holds the number being entered 
let previousInput = ""; // Holds the previously entered number
let operator = null;  // Stores the selected operation

const buttons = document.querySelectorAll('.button');
const displayElement = document.querySelector('.display');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.innerHTML;

    if (value >= '0' && value <= '9') {
      // Append the clicked number to currenInput
      currenInput += value;
      displayElement.innerHTML = currenInput;
    } else if (value === 'C') {
      // Clear all values
      currenInput = "";
      previousInput = "";
      operator = null;
      displayElement.innerHTML = "";
    } else if (value === '=') {
      // When equals is clicked, perform the calculation
      if (previousInput !== "" && currenInput !== "" && operator) {
        displayElement.innerHTML = doMathFunction(Number(previousInput), Number(currenInput), operator);
        // Optionally update currenInput with result for chaining:
        currenInput = displayElement.innerHTML;
        previousInput = "";
        operator = null;
      }
    } else {
      // Assume it's an operator (+, -, *, /)
      if (currenInput !== "") {
        // Store the current value and operator, then clear currenInput for next number
        previousInput = currenInput;
        operator = value;
        currenInput = "";
        displayElement.innerHTML = operator;
      }
    }
  });
});

function doMathFunction(num1, num2, operation) {
  let result = 0;
  if (operation === '*') {
    result = num1 * num2;
  } else if (operation === '/') {
    result = num1 / num2;
  } else if (operation === '+') {
    result = num1 + num2;
  } else if (operation === '-') {
    result = num1 - num2;
  }
  return result;
}
