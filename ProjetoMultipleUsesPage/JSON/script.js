function submitForm(event) {
    event.preventDefault();
  
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let phoneInput = document.getElementById('phone');
    let passwordInput = document.getElementById('password');
  
    let formData = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      password: passwordInput.value
    };
  
    let jsonOutput = document.getElementById('json-output');
    jsonOutput.textContent = JSON.stringify(formData, null, 2);
  }
  