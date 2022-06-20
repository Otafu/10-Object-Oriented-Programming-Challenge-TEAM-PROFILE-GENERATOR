const {
  TeamManagerQuestions,
  EngineerQuestions,
  InternQuestions,
} = require("./src/questions");
const inquirer = require("inquirer");
const { Intern, Manager, Engineer } = require("./lib");
const fs = require("fs").promises;
const generateHTML = require("./src/generate-html");

var second_position = "";
var newManager = {};
var newEngineer = {};
var newIntern = {};

function init() {
  inquirer
    .prompt(TeamManagerQuestions)
    .then((answers) => {
      const {
        team_manager_email: email,
        team_manager_id: id,
        team_manager_name: name,
        team_manager_office_number: office_number,
      } = answers;

      newManager = new Manager(name, id, email, office_number);

      if (answers.next_position === "Engineer") {
        second_position = "engineer";
        console.debug(
          "\nAdding Engineer in the team\n-------------------------------------------------"
        );
        return inquirer.prompt(EngineerQuestions);
      }

      second_position = "intern";
      console.debug(
        "\nAdding Intern in the team\n-------------------------------------------------"
      );
      return inquirer.prompt(InternQuestions);
    })
    .then((secondAnswer) => {
      firstPositionAnswers = secondAnswer;
      if (second_position === "engineer") {
        const {
          engineer_email: email,
          engineer_id: id,
          engineer_name: name,
          engineer_github: github,
        } = secondAnswer;

        newEngineer = new Engineer(name, id, email, github);

        console.debug(
          "\nAdding Intern in the team\n-------------------------------------------------"
        );
        return inquirer.prompt(InternQuestions);
      }

      const {
        intern_name: name,
        intern_id: id,
        intern_email: email,
        intern_school: school,
      } = secondAnswer;

      newIntern = new Intern(email, id, name, school);
      console.debug(
        "\nAdding Engineer in the team\n-------------------------------------------------"
      );
      return inquirer.prompt(EngineerQuestions);
    })
    .then((thirdAnswer) => {
      if (second_position === "engineer") {
        const {
          intern_name: name,
          intern_id: id,
          intern_email: email,
          intern_school: school,
        } = thirdAnswer;
        newIntern = new Intern(name, id, email, school);
      } else {
        const {
          engineer_name: name,
          engineer_id: id,
          engineer_email: email,
          engineer_github: github,
        } = thirdAnswer;
        newEngineer = new Engineer(name, id, email, github);
      }

      const htmlContent = generateHTML({
        newManager,
        newEngineer,
        newIntern,
      });

      return fs.writeFile("./dist/index.html", htmlContent).then(() => {
        console.info("INFO: new index.html generated.");
      });
    })
    .catch((error) => {
      console.debug("Error");
      console.log(error);
    });
}

// Function call to initialize app
init();
