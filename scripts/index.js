const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
   return parseInt(userInput.value);
}

function calculate(operationType) {
   const selectedNumber = getUserInput();
   const newInput = currentResult;
   let operator;
   if (operationType === 'ADD') {
      currentResult += selectedNumber;
      operator = '+';
   } else if (operationType === 'SUBTRACT') {
      currentResult -= selectedNumber;
      operator = '-'
   } else if (operationType === 'MULTIPLY') {
      currentResult *= selectedNumber;
      operator = '*';
   } else if (operationType === 'DIVIDE') {
      currentResult /= selectedNumber;
      operator = '/';
   }
   createEquation(operator, newInput, selectedNumber);
}

function add() {
   calculate('ADD');
}
function subtract() {
   calculate('SUBTRACT');
}
function multiply() {
   calculate('MULTIPLY');
}
function divide() {
   calculate('DIVIDE');
}

function showResult(res, text) {
   result.textContent = res;
   calculation.textContent = text;
}

function createEquation(operator, prevResult, inputNumber) {
   const equation = `${prevResult} ${operator} ${inputNumber}`;
   showResult(currentResult, equation);
}