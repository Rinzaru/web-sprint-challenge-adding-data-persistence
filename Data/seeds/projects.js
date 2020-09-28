exports.seed = async function (knex) {
  await knex("Projects").insert([
    { Name: "Defeat Lambda", Description: "blah blah" },
    { Name: "Take Over World", Description: "Blah Blah" },
    { Name: "Sing Song", Description: "Blah Blah" },
    { Name: "Create Super Weapons", Description: "blah blah" },
    { Name: "Make Pasta", Description: "Blah Blah" },
    { Name: "Birth Cow", Description: "Blah Blah" },
    { Name: "Learn Sprint Challenge", Description: "blah blah" },
    { Name: "More Stuff", Description: "Blah Blah" },
    { Name: "Even More Stuff", Description: "Blah Blah" },
  ]);
};
