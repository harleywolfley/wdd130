function addNumbers() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultSpan = document.getElementById('result');
  
    const number1 = parseFloat(num1Input.value);
    const number2 = parseFloat(num2Input.value);
  
    if (!isNaN(number1) && !isNaN(number2)) {
      const sum = number1 + number2;
      resultSpan.textContent = sum;
    } else {
      resultSpan.textContent = 'Please enter valid numbers.';
    }
  }