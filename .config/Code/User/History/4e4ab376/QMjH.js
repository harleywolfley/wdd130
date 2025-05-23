function performMathOperations(num1, num2) {
    console.log(`Performing operations on ${num1} and ${num2}:`);
  
    const sum = num1 + num2;
    console.log(`Addition: ${num1} + ${num2} = ${sum}`);
  
    const difference = num1 - num2;
    console.log(`Subtraction: ${num1} - ${num2} = ${difference}`);
  
    const product = num1 * num2;
    console.log(`Multiplication: ${num1} * ${num2} = ${product}`);
  
    if (num2 !== 0) {
      const quotient = num1 / num2;
      console.log(`Division: ${num1} / ${num2} = ${quotient}`);
    } else {
      console.log("Division by zero is not allowed.");
    }
  
    const exponent = num1 ** num2;
    console.log(`Exponent: ${num1} ^ ${num2} = ${exponent}`);
  }
  
  // Example usage:
  const value1 = 10;
  const value2 = 5;
  performMathOperations(value1, value2);
  
  console.log("\n--- Another example ---");
  const value3 = 7;
  const value4 = 0;
  performMathOperations(value3, value4);



  const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function performMathOperations(num1, num2) {
    console.log(`\nPerforming operations on ${num1} and ${num2}:`);
  
    const sum = num1 + num2;
    console.log(`Addition: ${num1} + ${num2} = ${sum}`);
  
    const difference = num1 - num2;
    console.log(`Subtraction: ${num1} - ${num2} = ${difference}`);
  
    const product = num1 * num2;
    console.log(`Multiplication: ${num1} * ${num2} = ${product}`);
  
    if (num2 !== 0) {
      const quotient = num1 / num2;
      console.log(`Division: ${num1} / ${num2} = ${quotient}`);
    } else {
      console.log("Division by zero is not allowed.");
    }
  
    const exponent = num1 ** num2;
    console.log(`Exponent: ${num1} ^ ${num2} = ${exponent}`);
  
    readline.close();
  }
  
  function askForNumbers() {
    readline.question('Enter the first number: ', (num1Input) => {
      const num1 = parseFloat(num1Input);
      if (isNaN(num1)) {
        console.log('Invalid input. Please enter a valid number.');
        askForNumbers(); // Re-prompt for the first number
        return;
      }
  
      readline.question('Enter the second number: ', (num2Input) => {
        const num2 = parseFloat(num2Input);
        if (isNaN(num2)) {
          console.log('Invalid input. Please enter a valid number.');
          askForNumbers(); // Re-prompt for both numbers
          return;
        }
  
        performMathOperations(num1, num2);
      });
    });
  }
  
  console.log('Simple Math Operations Program');
  askForNumbers();