exports.seed = async function (knex) {
  await knex("Resources").insert([
    { Name: "Desks", Description: "blah blah" },
    { Name: "Office Space", Description: "Blah Blah" },
    { Name: "Chandler Bing", Description: "Blah Blah" },
    { Name: "Vaccum Cleaner", Description: "blah blah" },
    { Name: "Food", Description: "Blah Blah" },
    { Name: "Utensils", Description: "Blah Blah" },
    { Name: "Stuff", Description: "blah blah" },
    { Name: "More Stuff", Description: "Blah Blah" },
    { Name: "Even More Stuff", Description: "Blah Blah" },
  ]);
};
