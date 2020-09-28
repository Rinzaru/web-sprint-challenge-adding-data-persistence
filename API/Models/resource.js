const db = require("../../Data/db-config");

function find() {
  return db("Resources");
}

function add(resource) {
  return db("Resources").insert(resource);
}

module.exports = {
  find,
  add,
};
