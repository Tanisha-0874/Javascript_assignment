console.log(mysteryVariable);
let mysteryVariable = 10;
console.log(mysteryVariable);
function revealMystery() {
console.log("Inside revealMystery:", mysteryVariable);
let mysteryVariable = 20;
console.log("Inside revealMystery (after declaration):", mysteryVariable);
}
revealMystery();
console.log("After revealMystery:", mysteryVariable);

/*
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. However, how variables are hoisted depends on how they are declared. Variables declared with var are hoisted and initialized with undefined, meaning they can be accessed before their declaration without causing an error. In contrast, let and const are also hoisted but are not initialized; they remain in a "temporal dead zone" from the start of the block until their declaration is encountered, leading to a ReferenceError if accessed before initialization. Additionally, const must be initialized at the time of declaration, unlike let.
*/
