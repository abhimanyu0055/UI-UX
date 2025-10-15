
let numbers = [25, 10, 45, 5, 30];

console.log("Original Array:", numbers);


let largest = Math.max(...numbers);
let smallest = Math.min(...numbers);

console.log("Largest Number:", largest);
console.log("Smallest Number:", smallest);


let ascending = [...numbers].sort((a, b) => a - b);
console.log("Ascending Order:", ascending);


let descending = [...numbers].sort((a, b) => b - a);
console.log("Descending Order:", descending);
