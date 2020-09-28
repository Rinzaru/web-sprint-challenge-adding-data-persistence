const express = require("express");

const projectRouter = require("./API/Routers/Project");
const resourceRouter = require("./API/Routers/resources");
const taskRouter = require("./API/Routers/tasks");
const server = express();

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resource", resourceRouter);
server.use("/api/tasks", taskRouter);
server.use(projectRouter);
server.use(resourceRouter);
server.use(taskRouter);

module.exports = server;
