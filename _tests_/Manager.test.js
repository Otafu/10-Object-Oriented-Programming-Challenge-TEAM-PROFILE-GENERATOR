// using Manager constructor
const { Manager } = require("../lib");

// creates manager object
test("Manager object/instance", () => {
  const manager = new Manager("Homes", 11, "homes@gmail.com", "#111-11");

  expect(manager).toHaveProperty("email", "homes@gmail.com");
  expect(manager).toHaveProperty("id", 11);
  expect(manager).toHaveProperty("name", "Homes");
  expect(manager).toHaveProperty("officeNumber", "#111-11");
});

test("manager have getName() method", () => {
  const manager = new Manager("Homes", 11, "homes@gmail.com", "#111-11");

  expect(manager.getName()).toEqual("Homes");
});

test("manager have getId() method", () => {
  const manager = new Manager("Homes", 11, "homes@gmail.com", "#111-11");
  expect(manager.getId()).toEqual(11);
});

test("manager have getEmail() method", () => {
  const manager = new Manager("Homes", 11, "homes@gmail.com", "#111-11");
  expect(manager.getEmail()).toEqual("homes@gmail.com");
});

// gets role from getRole()
test("manager have getRole() method", () => {
  const manager = new Manager("Homes", 11, "homes@gmail.com", "#111-11");
  expect(manager.getRole()).toEqual("Manager");
});
