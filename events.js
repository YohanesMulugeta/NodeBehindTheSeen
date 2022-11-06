const EventEmmiter = require("events");
const http = require("http");

class Sales extends EventEmmiter {
  constructor() {
    super();
  }
}

const myEmmiter = new Sales();

myEmmiter.on("newSale", () => {
  console.log("there was a new sale");
});

myEmmiter.on("newSale", () => {
  console.log("Costumer name: Yohanes");
});

myEmmiter.on("newSale", (stock) => {
  console.log(`There are ${stock} items left in the stock.`);
});

myEmmiter.emit("newSale", 9);

// ///////////////////////////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("new request recieved");
  console.log(req.url);
  res.end("Request Recieved");
});

server.on("request", (req, res) => {
  console.log("another request recieved");

  //   res.end("Another Request Recieved");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request...");
});
