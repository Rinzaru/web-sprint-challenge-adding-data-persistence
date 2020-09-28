const express = require("express");

const projects = require("../Models/project-model");

const router = express.Router();

router.get("/", (req, res) => {
  projects
    .find()
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed To Get Projects" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  projects
    .add(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add new project" });
    });
});

module.exports = router;
