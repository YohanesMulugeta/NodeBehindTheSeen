// class Calculator {
//   add(a, b) {
//     return a + b;
//   }

//   multiply(a, b) {
//     return a * b;
//   }

//   divide(a, b) {
//     return a / b;
//   }

//   subtract(a, b) {
//     return a - b;
//   }
// }

// module.exports = Calculator;

// This way is more elegant

module.exports = class {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }

  subtract(a, b) {
    return a - b;
  }
};
