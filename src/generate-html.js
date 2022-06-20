const createHTML = require("create-html");

const positionIcons = {
  Engineer: "laptop_mac",
  Manager: "content_paste",
  Intern: "assignment_ind",
};

function moreInfo(teamMember) {
  if (teamMember.getRole() === "Manager") {
    return `<p class="office">Office Number: ${teamMember.officeNumber}</p>`;
  }
  if (teamMember.getRole() === "Engineer") {
    return `<p class="github">Github: ${teamMember.github}</p>`;
  }

  return `<p class="school">School: ${teamMember.school}</p>`;
}

function generateHTML(team) {
  const teamInfo = Object.keys(team)
    .map((key) => {
      const teamMember = team[key];

      return `<div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${teamMember.name}</h3>
                <h4>${teamMember.getRole()}</h4><i class="material-icons">${
        positionIcons[teamMember.getRole()]
      }</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${teamMember.getId()}</p>
                <p class="email">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></p>
                ${moreInfo(teamMember)}
            </div>

        </div>
    </div>`;
    })
    .join("");
  return createHTML({
    title: "Team Profile Generator",
    body: "testing content here",
    css: ["style.css"],
    body: `<body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile Generator</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${teamInfo}
                </div>
            </div>    
        </main>        
        </body>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
        crossorigin="anonymous"></script>
        `,
    head: `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        `,
  });
}

module.exports = generateHTML;
