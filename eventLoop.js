const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
const OS = require("os");
process.env.UV_THREADPOOL_SIZE = 5;

setTimeout(() => {
  console.log("Timer one finished");
  setTimeout(() => {
    console.log("timer second one");
  }, 0);
}, 0);

setImmediate(() => {
  console.log("the immediate one finish");
});

fs.readFile("./test-file.txt", () => {
  console.log("......................... 0");

  console.log(console.log("IO finish"));

  setTimeout(() => {
    console.log("Timer two finished");
  }, 0);

  setTimeout(() => {
    console.log("timer three finished");
  }, 2300);

  setImmediate(() => {
    console.log("the immediate two zero finish");
  });

  process.nextTick(() => {
    console.log("process next tick ended");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("password incripted", Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("password incripted", Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("password incripted", Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("password incripted", Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("password incripted", Date.now() - start);
  });
});
// fs.readFile("./test-file.txt", () => {
//   console.log("......................... 1");
//   console.log(console.log("IO finish"));

//   setTimeout(() => {
//     console.log("Timer two finished");
//   }, 0);

//   setTimeout(() => {
//     console.log("timer three finished");
//   }, 1000);

//   setImmediate(() => {
//     console.log("the immediate two finish");
//   });

//   process.nextTick(() => {
//     console.log("process next tick ended");
//   });
// });

console.log("hello from the top level code");
