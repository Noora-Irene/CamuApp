const buttons = document.querySelector('.calc-btn-group');

const calculator = {
   screenValue: '0',
   userInput1: null,
   userInput2: false,
   operator: null
};

buttons.addEventListener('click', (e) => {
   const { target } = e;
   const { value } = target;

   // Checks that clicked element is input type button
   if (!target.matches('[type="button"]')) {
      return;
   }
   switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
      case '=':
         useOperator(value);
         break;
      case '.':
         inputDecimal(value);
         break;
      case 'clear':
         clearAll();
         break;
      default:
         if (Number.isInteger(parseFloat(value))) {
            inputNumber(value);
         }
   }
   updScreen();
});

function useOperator(nextOperator) {
   const { userInput1, screenValue, operator } = calculator
   const i = parseFloat(screenValue);

   if (operator && calculator.userInput2) {
      calculator.operator = nextOperator;
      return;
   }
   if (userInput1 === null && !isNaN(i)) {
      calculator.userInput1 = i;
   } else if (operator) {
      const result = calculate(userInput1, i, operator);
      calculator.screenValue = `${parseFloat(result.toFixed(7))}`;
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

function inputDecimal(dot) {
   // Checks if there is already dot on screen
   if (calculator.userInput2 === true) {
      calculator.screenValue = '0';
      calculator.userInput2 = false;
      return
   }
   if (!calculator.screenValue.includes(dot)) {
      calculator.screenValue += dot;
   }
}

function inputNumber(num) {
   const { screenValue, userInput2 } = calculator;

   if (userInput2 === true) {
      calculator.screenValue = num;
      calculator.userInput2 = false;
   } else {
      calculator.screenValue = screenValue === '0' ? num : screenValue + num;
   }
}

function clearAll() {
   calculator.screenValue = '0';
   calculator.userInput1 = null;
   calculator.userInput2 = false;
   calculator.operator = null;
}

function updScreen() {
   const screen = document.querySelector('.screen');
   screen.value = calculator.screenValue;
}
updScreen();