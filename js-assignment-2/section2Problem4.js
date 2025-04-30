/*
In JavaScript:

-> If fewer arguments are passed than defined parameters, the missing ones are assigned undefined.
-> If more arguments are passed than there are parameters, the extra values are ignored unless a rest parameter is used to capture them.
-> JavaScript functions are flexible in arity—they don't throw an error due to mismatched argument counts.
*/

/* Syntax */
function example(a, ...rest) {
  // 'rest' is an array of all arguments after 'a'
}

/*Rules*/
/*
Rules:
It must be the last parameter in the function definition.
It helps when the number of arguments is unknown or variable.
*/

function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Usage
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100
console.log(sumAll()); // 0

function processArguments(primaryFunction, ...args) {
  return primaryFunction(...args);
}

// Example primary function: multiply two numbers
function multiply(x, y) {
  return x * y;
}

// Usage
console.log(processArguments(multiply, 4, 5)); // 20

// Another example: concatenating strings
function joinStrings(...parts) {
  return parts.join(" ");
}

console.log(processArguments(joinStrings, "Hello", "there", "world!")); // Hello there world!

