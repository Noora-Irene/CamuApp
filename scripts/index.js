const calculator = {
   screenValue: '0',
   userInput1: null,
   userInput2: false,
   operator: null
};

const buttons = document.querySelector('.calc-btn-group');
buttons.addEventListener('click', (e) => {
   const { target } = e;

   // Checks that clicked element is input type button
   if (!target.matches('[type="button"]')) {
      return;
   }
   if (target.classList.contains('operator')) {
      useOperator(target.value);
      updScreen();
      return;
   }
   if (target.classList.contains('decimal')) {
      inputDecimal(target.value);
      updScreen();
      return;
   }
   if (target.classList.contains('clear')) {
      console.log(target.value);
      return;
   }
   inputNumber(target.value);
   updScreen();
});

function inputNumber(num) {
   const { screenValue, userInput2 } = calculator;

   if (userInput2 === true) {
      calculator.screenValue = num;
      calculator.userInput2 = false;
   } else {
      calculator.screenValue = screenValue === '0' ? num : screenValue + num;
   }
}

function inputDecimal(dot) {
   // Checks if there is already dot on screen
   if (!calculator.screenValue.includes(dot)) {
      calculator.screenValue += dot;
   }
}
function useOperator(nextOperator) {
   const { userInput1, screenValue, operator } = calculator
   const i = parseFloat(screenValue);

   if (operator && calculator.userInput2) {
      calculator.operator = nextOperator;
      return;
   }

   if (userInput1 == null && !isNaN(i)) {
      calculator.userInput1 = i;
   } else if (operator) {
      const result = calculate(userInput1, i, operator);
      calculator.screenValue = String(result);
      calculator.userInput1 = result;
   }
   calculator.userInput2 = true;
   calculator.operator = nextOperator;
}

function calculate(userInput1, userInput2, operator) {
   if (operator === '+') {
      return userInput1 + userInput2;
   } else if (operator === '-') {
      return userInput1 - userInput2;
   } else if (operator === '*') {
      return userInput1 * userInput2;
   } else if (operator === '/') {
      return userInput1 / userInput2;
   }
   return userInput2;
}

function updScreen() {
   const screen = document.querySelector('.screen');
   screen.value = calculator.screenValue;
}
updScreen();