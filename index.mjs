import inquirer from "inquirer";
import fs from "fs";

const prompt = await inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description",
  },
  {
    type: "input",
    name: "contents",
    message: "Please provide the table of contents",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation info",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage info",
  },
  {
    type: "input",
    name: "license",
    message: "Please specify the licence",
  },
  {
    type: "input",
    name: "authors",
    message: "Please provide contributing authors",
  },
  {
    type: "input",
    name: "tests",
    message: "Please specify tests",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide email address",
  },
]);

console.log(prompt); // { title: 'eewqw', description: 'rewq' }
const {
  title,
  description,
  contents,
  installation,
  usage,
  license,
  authors,
  tests,
  email,
} = prompt;

const readmeText = `
  # ${title[0].toUpperCase()}${title.substring(1)}
  ## ${description}
  ## Contents
  ${contents}
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## License
  ${license}
  ## Authors
  ${authors}
  ## Tests
  ${tests}
  ## Email
  ${email}

`;

fs.writeFile("./README.md", readmeText, (err) =>
  err ? console.log(err) : console.log("Success!")
);

// Acceptance Criteria
// Create a command-line application that accepts user input.
// When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
// The title of my project
// Sections entitled:
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
// When a user enters the project title then it is displayed as the title of the README
// When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
// When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
// When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README

// import inquirer from "inquirer";
// import fs from "fs";

// const prompt = await inquirer.prompt([
//   { type: "input", message: "Enter your first name", name: "firstName" },
//   { type: "input", message: "Enter your last name", name: "lastName" },
//   { type: "input", message: "Enter your shoe size", name: "shoeSize" },
// ]);

// const { firstName, lastName, shoeSize } = prompt;

// const html = `
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="./style.css" />
//     <title>Document</title>
//   </head>
//   <body>
//     <h1>${firstName} ${lastName}</h1>
//     <h2>Has a size ${shoeSize}</h2>
//     <p>(That's a ${Number(shoeSize) > 8 ? "big foot" : "small foot"})</p>
//     <script src="./script.mjs"></script>
//   </body>
// </html>
// `;

// fs.writeFile("index.html", html, (err) =>
//   err ? console.log(err) : console.log("success!")
// );
