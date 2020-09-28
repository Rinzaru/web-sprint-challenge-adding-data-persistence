const express = require("express");

const resources = require("../Models/resource");

const router = express.Router();

router.get("/resource", (req, res) => {
  resources
    .find()
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed To Get resources" });
    });
});

router.post("/resource", (req, res) => {
  const resourceData = req.body;

  resources
    .add(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add new resource" });
    });
});

module.exports = router;
