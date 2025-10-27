const nodered = require("node-red");
const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer(app);
const settings = {
    httpAdminRoot: "/",
    httpNodeRoot: "/api",
    userDir: "./data",
    functionGlobalContext: {}
};

nodered.init(server, settings);
app.use(settings.httpAdminRoot, nodered.httpAdmin);
app.use(settings.httpNodeRoot, nodered.httpNode);

server.listen(process.env.PORT || 1880);
nodered.start();
