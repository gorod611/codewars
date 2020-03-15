function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function() {
      return i;
    });
  }

  return callbacks;
}

const callbacks = createFunctions(5);
console.log(callbacks);
console.log(callbacks[0]()); // must return 0
console.log(callbacks[3]()); // must return 3
