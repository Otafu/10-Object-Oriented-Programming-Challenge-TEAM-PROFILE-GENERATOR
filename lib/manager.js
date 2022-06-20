const Employee = require("./employee");

class Manager extends Employee {
  officeNumber = "";

  constructor(name, id, email, officerNumber) {
    super(name, id, email);
    this.officeNumber = officerNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
