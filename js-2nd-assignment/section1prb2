function delayGreeter(name) {
  for (var i = 0; i < names.length; i++) {
    setTimeout(function () {
      console.log(`Hello,${names[i]}!`);
    }, i * 1000);
  }
}

delayGreeter(["Alice", "Bob", "Charlie"]);

function delayGreeterCorrected(name) {
  for (var i = 0; i < names.length; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(`Hello,${names[i]}!`);
      }, i * 1000);
    })(i);
  }
}

delayGreeterCorrected(["Alice", "Bob", "Charlie"]);

function delayGreeterLet(name) {
  for (let i = 0; i < names.length; i++) {
    setTimeout(function () {
      console.log(`Hello,${names[i]}!`);
    }, i * 1000);
  }
}

delayGreeterLet(["Alice", "Bob", "Charlie"]);
