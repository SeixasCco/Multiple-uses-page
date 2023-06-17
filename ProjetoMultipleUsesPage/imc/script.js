function calculateBMI(event) {
    event.preventDefault();
  
    let heightInput = document.getElementById('height');
    let weightInput = document.getElementById('weight');
    let resultDiv = document.getElementById('result');
  
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight)) {
      resultDiv.textContent = 'Por favor, insira valores válidos.';
      return;
    }
  
    let bmi = weight / (height * height);
    resultDiv.textContent = 'Seu IMC é: ' + bmi.toFixed(2);
  }
  