exports.seed = async function (knex) {
  await knex("Tasks").insert([
    { Name: "Step 1", Description: "blah blah", Project_Id: 1 },
    { Name: "Step 2", Description: "Blah Blah", Project_Id: 1 },
    { Name: "Step 3", Description: "Blah Blah", Project_Id: 1 },
    { Name: "Step 1", Description: "blah blah", Project_Id: 2 },
    { Name: "Step 2", Description: "Blah Blah", Project_Id: 2 },
    { Name: "Step 3", Description: "Blah Blah", Project_Id: 2 },
    { Name: "Step 1", Description: "blah blah", Project_Id: 3 },
    { Name: "Step 2", Description: "Blah Blah", Project_Id: 3 },
    { Name: "Step 3", Description: "Blah Blah", Project_Id: 3 },
  ]);
};
