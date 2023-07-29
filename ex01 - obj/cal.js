const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    if (b === 0) {
      return "Cann't divided by zero";
    }

    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

//now can use these methods

console.log("Addition:", calculator.add(5, 3)); // Output: Addition: 8
console.log("Subtraction:", calculator.sub(10, 4)); // Output: Subtraction: 6
console.log("Multiplication:", calculator.multiply(2, 6)); // Output: Multiplication: 12
console.log("Division:", calculator.divide(15, 3)); // Output: Division: 5
console.log("Division:", calculator.divide(10, 0)); // Output: Division: Cannot divide by zero!
