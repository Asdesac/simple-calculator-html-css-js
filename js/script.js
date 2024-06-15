let currentInput = "";
let currentOperation = null;
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  updateScreen();
}

function setOperation(operation) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculateResult();
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
}

function clearScreen() {
  currentInput = "";
  previousInput = "";
  currentOperation = null;
  updateScreen();
}

function calculateResult() {
  if (currentInput === "" || previousInput === "") return;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;
  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  currentInput = result;
  currentOperation = null;
  previousInput = "";
  updateScreen();
}

function updateScreen() {
  const screen = document.getElementById("calculator-screen");
  screen.value = currentInput;
}
