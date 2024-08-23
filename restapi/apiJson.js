/******* Creating a simple rest api using the data.json file *********/
const http = require("http");
const products = require("./data.json");
const server = http.createServer((req, res) => {
  req.products = products;
  switch (req.method) {
    case "GET":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(req.products));
      break;
    case "PUT":
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({ title: "This is a message", matter: "Invalid method" })
      );
      break;
    default:
      res.statusCode = 403;
      res.write("You are forbidden to access this data");
      break;
  }
  res.end();
});

server.listen(4000, () => {
  console.log("Server has started now ");
});
