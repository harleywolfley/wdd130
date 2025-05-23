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
