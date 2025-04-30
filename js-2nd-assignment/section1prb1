function createCounter() {
  let c = 0;
  function incrementCounter() {
    c++;
    return c;
  }
  return incrementCounter;
}

const counterA = createCounter();
console.log(counterA());
console.log(counterA());
const counterB = createCounter();
console.log(counterB());
