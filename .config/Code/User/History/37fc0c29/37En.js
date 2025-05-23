const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  let numbers = [];
  let operationIndex = 0;
  const operations = ['addition', 'subtraction', 'multiplication', 'division', 'exponent', 'addition', 'subtraction', 'multiplication']; // Now 8 operations
  
  function performOperation(num1, num2, operation) {
    let result;
    switch (operation) {
      case 'addition':
        result = num1 + num2;
        console.log(`Addition: ${num1} + ${num2} = ${result}`);
        break;
      case 'subtraction':
        result = num1 - num2;
        console.log(`Subtraction: ${num1} - ${num2} = ${result}`);
        break;
      case 'multiplication':
        result = num1 * num2;
        console.log(`Multiplication: ${num1} * ${num2} = ${result}`);
        break;
      case 'division':
        if (num2 !== 0) {
          result = num1 / num2;
          console.log(`Division: ${num1} / ${num2} = ${result}`);
        } else {
          console.log("Division by zero is not allowed.");
          return false; // Indicate failure
        }
        break;
      case 'exponent':
        result = num1 ** num2;
        console.log(`Exponent: ${num1} ^ ${num2} = ${result}`);
        break;
      default:
        console.log(`Unknown operation: ${operation}`);
        return false; // Indicate failure
    }
    return true; // Indicate success
  }
  
  function getNumber(prompt, callback) {
    readline.question(prompt, (input) => {
      const num = parseFloat(input);
      if (isNaN(num)) {
        console.log('Invalid input. Please enter a valid number.');
        getNumber(prompt, callback); // Re-prompt
        return;
      }
      callback(num);
    });
  }
  
  function processInput() {
    if (numbers.length < 2) {
      const prompt = `Enter number ${numbers.length + 1}: `;
      getNumber(prompt, (num) => {
        numbers.push(num);
        processInput();
      });
    } else if (operationIndex < operations.length) {
      const operation = operations[operationIndex];
      console.log(`\nPerforming ${operation} on ${numbers[0]} and ${numbers[1]}:`);
      const success = performOperation(numbers[0], numbers[1], operation);
      operationIndex++;
      if (operationIndex < operations.length) {
        getNumber(`Enter the next number for the next operation: `, (num) => {
          numbers = [performIntermediateCalculation(numbers[0], numbers[1], operations[operationIndex - 1]), num];
          processInput();
        });
      } else {
        console.log("\nAll operations completed.");
        readline.close();
      }
    }
  }
  
  function performIntermediateCalculation(num1, num2, operation) {
    switch (operation) {
      case 'addition':
        return num1 + num2;
      case 'subtraction':
        return num1 - num2;
      case 'multiplication':
        return num1 * num2;
      case 'division':
        return num2 !== 0 ? num1 / num2 : NaN;
      case 'exponent':
        return num1 ** num2;
      default:
        return NaN;
    }
  }
  
  console.log('Sequential Math Operations Program (9 Inputs)'); // Updated message
  processInput();