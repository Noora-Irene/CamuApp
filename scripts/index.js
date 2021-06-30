let currentResult = 0;
const buttons = document.querySelectorAll('[type="button"]');

for (let i = 0; i < buttons.length; i++) {
   buttons[i]
      .addEventListener("click", setUserInput, false);
}

function setUserInput() {
   document.getElementById("screen").innerHTML += this.value;
}
