// console.log(arguments);
// console.log(require("module").wrapper);

// Module.Exports
const Calc = require("./test-module");
const calculator1 = new Calc();

console.log(calculator1.add(8, 29), "------------- from module.exports");

// Exports
const { add, multiply } = require("./test-module2");
console.log(add(29, 8), " ------- from exports");
// console.log(multiply(29, 8));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
