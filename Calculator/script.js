const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let firstValue = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (!isNaN(value)) {
      currentInput += value;
      display.value = currentInput;
    }
    else if (value === "C") {
      currentInput = "";
      firstValue = "";
      operator = "";
      display.value = "";
    }
    else if (value === "=") {
      if (currentInput && firstValue) {
        display.value = calculate(firstValue, currentInput, operator);
        currentInput = display.value;
        firstValue = "";
        operator = "";
      }
    }
    else {
      operator = value;
      firstValue = currentInput;
      currentInput = "";
    }
  });
});

function calculate(a, b, operator) {
  a = Number(a);
  b = Number(b);

  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") return b !== 0 ? a / b : "Error";

  return "";
}
