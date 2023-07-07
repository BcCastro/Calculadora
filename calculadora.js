let displayValue = '';
    let operator = '';
    let operand1 = '';
    let operand2 = '';
    let isNightMode = false;

    function appendDigit(digit) {
      displayValue += digit;
      updateDisplay();
    }

    function appendOperator(op) {
      operator = op;
      operand1 = displayValue;
      displayValue = '';
      updateDisplay();
    }

    function calculate() {
      operand2 = displayValue;
      displayValue = eval(operand1 + operator + operand2);
      updateDisplay();
   }

    function clearDisplay() {
      displayValue = '';
      operator = '';
      operand1 = '';
      operand2 = '';
      updateDisplay();
    }

    function deleteDigit() {
      displayValue = displayValue.slice(0, -1);
      updateDisplay();
    }

    function toggleNightMode() {
      const calculator = document.getElementById('calculator');
      calculator.classList.toggle('calculator-night');
      isNightMode = !isNightMode;
    }

    function updateDisplay() {
      document.getElementById('display').innerText = displayValue;
    }
