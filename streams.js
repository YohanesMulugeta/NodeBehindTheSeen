const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  console.log("request recieved");

  //   solution 1
  //     the problem with this solution is node have to wait
  //   for the file to be entirely read and saved to the memory
  //   then send it to the client
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);

  //     res.end(data);
  //   });

  //   SOLUTION 2
  //   const readable = fs.createReadStream("test-file.txt");

  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });

  //   readable.on("end", () => {
  //     res.end();
  //   });

  //   readable.on("error", (err) => {
  //     res.statusCode = 500;
  //     res.end("file not found");
  //   });

  // SOLUTION 3

  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);

  //   readableSource.pipe(writableDestination)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listning...");
});
