// using Engineer constructor
const { Engineer } = require("../lib");

// creates engineer object
test("Engineer object/instance", () => {
  const engineer = new Engineer("Homes", 11, "homes@gmail.com", "homes.github");

  expect(engineer).toHaveProperty("email", "homes@gmail.com");
  expect(engineer).toHaveProperty("id", 11);
  expect(engineer).toHaveProperty("name", "Homes");
  expect(engineer).toHaveProperty("github", "homes.github");
});

test("engineer have getName() method", () => {
  const engineer = new Engineer("Homes", 11, "homes@gmail.com", "homes.github");

  expect(engineer.getName()).toEqual("Homes");
});

test("engineer have getId() method", () => {
  const engineer = new Engineer("Homes", 12, "homes@gmail.com", "homes.github");
  expect(engineer.getId()).toEqual(12);
});

test("engineer have getEmail() method", () => {
  const engineer = new Engineer("Homes", 11, "homes@gmail.com", "homes.github");
  expect(engineer.getEmail()).toEqual("homes@gmail.com");
});

// gets role from getRole()
test("engineer have getRole() method", () => {
  const engineer = new Engineer("Homes", 11, "homes@gmail.com", "homes.github");
  expect(engineer.getRole()).toEqual("Engineer");
});
