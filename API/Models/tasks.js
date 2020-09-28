const db = require("../../Data/db-config");

function find() {
  return db("Tasks");
}

function add(task) {
  return db("Tasks").insert(task);
}

module.exports = {
  find,
  add
};
