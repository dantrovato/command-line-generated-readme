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
    name: "installation",
    message: "Please provide installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage info",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please specify contribution guidelines",
  },

  {
    type: "input",
    name: "tests",
    message: "Please specify test instructions",
  },
  {
    type: "input",
    name: "contents",
    message: "Please provide the table of contents",
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
    name: "email",
    message: "Please provide email address",
  },
]);

// When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
// When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
// When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README

console.log(prompt); // { title: 'eewqw', description: 'rewq' }
const {
  title,
  description,
  installation,
  usage,
  contributing,
  tests,
  contents,
  license,
  authors,
  email,
} = prompt;

const readmeText = `
  # ${title[0].toUpperCase()}${title.substring(1)}
  ## Description
  ${description}
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## Contributing
  ${contributing}
  ## Tests
  ${tests}
  ## Contents
  ${contents}
  ## License
  ${license}
  ## Authors
  ${authors}
  ## Email
  ${email}

`;

fs.writeFile("./README.md", readmeText, (err) =>
  err ? console.log(err) : console.log("Success!")
);
