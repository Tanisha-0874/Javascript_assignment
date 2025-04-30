/*
A closure is a function that “remembers” the variables from its outer (enclosing) scope even after that scope has finished executing. In the setupCounter example, increment and decrement are closures that capture the count variable. This allows them to maintain and update the state of count even after setupCounter has returned. Since each call to setupCounter creates a new instance of count, multiple counters can exist independently without interfering with each other.
*/

function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

// Usage
const sayHello = createGreeting("Hello");
console.log(sayHello("World")); // Hello, World!

const sayWelcome = createGreeting("Welcome");
console.log(sayWelcome("Alice")); // Welcome, Alice!

function createSecretHolder(secret) {
  let hiddenSecret = secret;

  return {
    getSecret: function () {
      return hiddenSecret;
    },
    setSecret: function (newSecret) {
      hiddenSecret = newSecret;
    },
  };
}

// Usage
const secretObj = createSecretHolder("myPassword");

console.log(secretObj.getSecret()); // myPassword
secretObj.setSecret("newPassword123");
console.log(secretObj.getSecret()); // newPassword123

function createSecretHolder(secret) {
  // 'secret' is captured by the closure
  let hiddenSecret = secret;

  return {
    getSecret: function () {
      return hiddenSecret;
    },
    setSecret: function (newSecret) {
      hiddenSecret = newSecret;
    },
  };
}

















