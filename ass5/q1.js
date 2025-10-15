
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num2 !== 0 ? num1 / num2 : "Undefined (division by zero)";


alert("Sum: " + sum +
      "\nDifference: " + difference +
      "\nProduct: " + product +
      "\nQuotient: " + quotient);

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
