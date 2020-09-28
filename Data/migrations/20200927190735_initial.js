exports.up = async function (knex) {
  await knex.schema.createTable("Projects", (table) => {
    table.increments("Id");
    table.text("Name").notNull();
    table.text("Description");
    table.boolean("Completed").notNull().defaultTo(false);
  });

  await knex.schema.createTable("Resources", (table) => {
    table.increments("Id");
    table.text("Name").notNull();
    table.text("Description");
  });

  await knex.schema.createTable("Tasks", (table) => {
    table.increments("Id");
    table.text("Name").notNull();
    table.text("Description").notNull();
    table.boolean("Completed").notNull().defaultTo(false);
    table.integer("Project_Id").references("Id").inTable("Projects");
  });

  await knex.schema.createTable("Resources_To_Tasks", (table) => {
    table.primary(["Task_Id", "Resource_Id"]);
    table.integer("Task_Id").references("Id").inTable("Tasks");
    table.text("Task_Name").references("Name").inTable("Tasks");
    table.integer("Resource_Id").references("Id").inTable("Resources");
    table.text("Resource_Name").references("Name").inTable("Resources");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("Resources_To_Tasks");
  await knex.schema.dropTableIfExists("Tasks");
  await knex.schema.dropTableIfExists("Resources");
  await knex.schema.dropTableIfExists("projects");
};
