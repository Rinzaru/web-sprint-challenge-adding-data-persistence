const express = require("express");

const tasks = require("../Models/tasks");

const router = express.Router();

router.get("/tasks", (req, res) => {
  tasks
    .find()
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed To Get tasks" });
    });
});

router.post("/tasks", (req, res) => {
  const taskData = req.body;

  tasks
    .add(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add new task" });
    });
});

module.exports = router;
