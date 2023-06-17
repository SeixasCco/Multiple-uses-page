let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  let expression = display.value;
  let result;
  try {
    result = eval(expression);
  } catch (error) {
    result = 'Error';
  }
  display.value = result;
}

function clearDisplay() {
  display.value = '';
}
