const db = require("../../Data/db-config");

function find() {
  return db("Projects");
}

function add(project) {
  return db("Projects").insert(project);
}

module.exports = {
  find,
  add,
};
