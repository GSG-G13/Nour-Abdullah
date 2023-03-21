const fs = require("fs");
const path = require("path");

const handleHomePage = (request, response) => {
  const filePath = path.join(__dirname, "../public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("Go to the hell");
      return;
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

const handleCSS = (request, response, endpoint) => {
  
  const filePath = path.join(__dirname,"..","public",  ...endpoint.split('/'));
  console.log(filePath);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("Go to the hell from css");
      return;
    } else {
      response.writeHead(200, { "Content-Type": "text/css" });
      response.end(file);
    }
  });
};

const handleDom = (request, response) => {
  const filePath = path.join(__dirname, "../public", "DOM.js");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("Go to the hell");
      return;
    } else {
      response.writeHead(200, { "Content-Type": "text/js" });
      response.end(file);
    }
  });
}
const handleErr = (request, response) => {
  response.writeHead(404, { "Content-Type": "text/html" });
  response.end("<h1>Page Not Found</h1>");
};



module.exports = {
  handleHomePage,
  handleCSS,
  handleDom,
  handleErr,
};
