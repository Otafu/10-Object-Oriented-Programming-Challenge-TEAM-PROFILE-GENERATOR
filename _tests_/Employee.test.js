// using Employee constructor
const { Employee } = require("../lib");

// creates employee object
test("Employee object/instance", () => {
  const employee = new Employee("Homes", 11, "homes@gmail.com");

  expect(employee).toHaveProperty("email", "homes@gmail.com");
  expect(employee).toHaveProperty("id", 11);
  expect(employee).toHaveProperty("name", "Homes");
});

test("employee have getName() method", () => {
  const employee = new Employee("Homes", 12, "homes@gmail.com");

  expect(employee.getName()).toEqual("Homes");
});

// gets id from getId()
test("employee have getId() method", () => {
  const employee = new Employee("Homes", 12, "homes@gmail.com");
  //
  expect(employee.getId()).toEqual(12);
});

// gets emails from getEmail()
test("employee have getEmail() method", () => {
  const employee = new Employee("Homes", 19, "homes@gmail.com");
  expect(employee.getEmail()).toEqual("homes@gmail.com");
});

// gets role from getRole()
test("employee have getRole() method", () => {
  const employee = new Employee("Homes", 4, "homes@gmail.com");
  expect(employee.getRole()).toEqual("Employee");
});
