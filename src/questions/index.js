const TeamManagerQuestions = [
  {
    type: "input",
    name: "team_manager_name",
    message: "Team Manager Name ? ",
  },
  {
    type: "input",
    name: "team_manager_id",
    message: "Employee ID ? ",
  },
  {
    type: "input",
    name: "team_manager_email",
    message: "Email Address ? ",
  },
  {
    type: "input",
    name: "team_manager_office_number",
    message: "Office # ? ",
  },
  {
    type: "list",
    name: "next_position",
    message: "Choose next employee role ?",
    choices: [
      'Engineer',
      'Intern',
    ]
  }
];

const EngineerQuestions = [
  {
    type: "input",
    name: "engineer_name",
    message: "Engineer Name ? ",
  },
  {
    type: "input",
    name: "engineer_id",
    message: "Employee ID ? ",
  },
  {
    type: "input",
    name: "engineer_email",
    message: "Email Address ? ",
  },
  {
    type: "input",
    name: "engineer_github",
    message: "Github username ? ",
  },
];

const InternQuestions = [
  {
    type: "input",
    name: "intern_name",
    message: "Intern Name ? ",
  },
  {
    type: "input",
    name: "intern_id",
    message: "Employee ID ? ",
  },
  {
    type: "input",
    name: "intern_email",
    message: "Email Address ? ",
  },
  {
    type: "input",
    name: "intern_school",
    message: "School ? ",
  },
]
  
module.exports = { TeamManagerQuestions, EngineerQuestions, InternQuestions };
  