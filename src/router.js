const handlers = require("./handler");

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === "/") {
    handlers.handleHomePage(request, response);
  } else if (endpoint.includes(".css")) {
    handlers.handleCSS(request, response, endpoint);
  } else if (endpoint === "./DOM.js") {
    handlers.handleDom(request, response);
  } else {
    handlers.handleErr(request, response);
  }
};

module.exports = router;
