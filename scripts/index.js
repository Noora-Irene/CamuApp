let currentResult = 0;
const allBtn = document.querySelectorAll('[type="button"]');
const numberBtn = document.querySelectorAll('[class="num-btn"]');

for (let i = 0; i < allBtn.length; i++) {
   allBtn[i]
      .addEventListener("click", setUserInput, false);
}
for (let i = 0; i < numberBtn.length; i++) {
   numberBtn[i]
      .addEventListener("click", setResult, false);
}

function setUserInput() {
   document.getElementById("screen").innerHTML += this.value;
}

function setResult() {
   document.getElementById("result").innerHTML += this.value;
}