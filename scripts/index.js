const calculator = {
   startValue: '0',
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
      console.log(target.value);
      return;
   }
   if (target.classList.contains('decimal')) {
      console.log(target.value);
      return;
   }
   if (target.classList.contains('clear')) {
      console.log(target.value);
      return;
   }
   inputNumber(target.value);
   updScreen();
})

function inputNumber(num) {
   const { startValue } = calculator; // same as const startValue = calculator.startValue;
   calculator.startValue = startValue === '0' ? num : startValue + num;
}

function updScreen() {
   const screen = document.querySelector('.screen');
   screen.value = calculator.startValue;
}
updScreen();