
function processArray(arr) {
  let result = arr
    .filter(num => num % 2 === 0)   
    .map(num => num * 2);           

  let sum = result.reduce((acc, val) => acc + val, 0); 
  return sum;
}

let nums = [1, 2, 3, 4, 5, 6];
console.log("Sum of processed numbers:", processArray(nums));
