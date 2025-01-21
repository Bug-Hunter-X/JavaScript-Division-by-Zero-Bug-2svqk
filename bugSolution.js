function foo(a, b) {
  // Handle division by zero
  if (b === 0) {
    return Infinity; // or NaN, or throw an error - depends on your needs
  }
  // Handle cases where either 'a' or 'b' are 0 independently.
  if (a === 0 || b === 0) {
    return 0; // more robust solution, returning 0 to handle the case where a is 0
  }
  return a / b;}

console.log(foo(1, 0)); // Returns Infinity
console.log(foo(0, 1)); // Returns 0
console.log(foo(1, 1)); // Returns 1