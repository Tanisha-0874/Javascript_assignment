const user = {
    name: "Alice",
    greetDelayed: function() {
      setTimeout(function() {
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    }
  };
  
  user.greetDelayed(); // Outputs: Hello, undefined!

  /*
  The problem lies in how this works inside the setTimeout callback. The regular function inside setTimeout has its own this context, which defaults to the global object (window in browsers) or undefined in strict mode. Therefore, this.name doesn't refer to the user object but to window.name (which is often undefined) or throws an error in strict mode.
   */

/* By storing the value of this from the outer function in a variable (commonly called self or that), we can keep a reference to the correct context: */


const userCorrectedTraditional = {
    name: "Alice",
    greetDelayed: function() {
      const self = this; // Capture the correct context
      setTimeout(function() {
        console.log(`Hello, ${self.name}!`);
      }, 1000);
    }
  };
  
  userCorrectedTraditional.greetDelayed(); // Outputs: Hello, Alice!
  
/*self holds the reference to the user object, and we access self.name inside the callback instead of this.name. This technique ensures that the callback still refers to the correct user object. */

/* Arrow functions differ from regular functions because they do not have their own this. Instead, they lexically bind this—meaning they inherit this from their surrounding (enclosing) scope. */

const userCorrectedArrow = {
  name: "Bob",
  greetDelayed: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  },
};

userCorrectedArrow.greetDelayed(); // Outputs: Hello, Bob!


/* Here, this inside the arrow function refers to the same this as the enclosing greetDelayed method—i.e., the userCorrectedArrow object. This makes arrow functions ideal for callbacks where you want to retain the outer this. */

/* Failing Version */

const example = {
  value: 42,
  showValueDelayed: function () {
    setTimeout(function () {
      console.log(`Value: ${this.value}`);
    }, 1000);
  },
};

example.showValueDelayed(); // Outputs: Value: undefined
//   In this version, this.value fails because the function inside setTimeout loses the context of example.

/* Fixed Version */

const exampleFixed = {
  value: 42,
  showValueDelayed: function () {
    setTimeout(() => {
      console.log(`Value: ${this.value}`);
    }, 1000);
  },
};

exampleFixed.showValueDelayed(); // Outputs: Value: 42
//   With an arrow function, this remains bound to the exampleFixed object, so this.value correctly refers to 42.




































