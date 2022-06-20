// using Intern constructor
const { Intern } = require("../lib");

// creates intern object
test("Intern object/instance", () => {
  const intern = new Intern("Homes", 11, "homes@gmail.com", "somewhere");

  expect(intern).toHaveProperty("email", "homes@gmail.com");
  expect(intern).toHaveProperty("id", 11);
  expect(intern).toHaveProperty("name", "Homes");
  expect(intern).toHaveProperty("school", "somewhere");
});

test("intern have getName() method", () => {
  const intern = new Intern("Homes", 11, "homes@gmail.com", "#111-11");

  expect(intern.getName()).toEqual("Homes");
});

test("intern have getId() method", () => {
  const intern = new Intern("Homes", 11, "homes@gmail.com", "#111-11");
  expect(intern.getId()).toEqual(11);
});

test("intern have getEmail() method", () => {
  const intern = new Intern("Homes", 11, "homes@gmail.com", "#111-11");
  expect(intern.getEmail()).toEqual("homes@gmail.com");
});

// gets role from getRole()
test("intern have getRole() method", () => {
  const intern = new Intern("Homes", 11, "homes@gmail.com", "#111-11");
  expect(intern.getRole()).toEqual("Intern");
});
