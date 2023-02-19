import inquirer from "inquirer";
import fs from "fs/promises";

const licenses = {
  Apache:
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  BSD: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
};

function generateLicence(licence) {
  return licenses[licence];
}

function generateTableOfContents(prompt) {
  let result = ``;
  const contents = Object.keys(prompt);
  contents.slice(0, contents.length - 1).forEach((content) => {
    if (content === "email" || content === "github") {
      content = "questions";
    }
    result += `* [${content}](#${content
      .toLowerCase()
      .split(" ")
      .join("-")})\n`;
  });

  return result;
}

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
    type: "list",
    name: "license",
    message: "Please specify the licence",
    choices: ["Apache", "MIT", "BSD"],
  },
  {
    type: "input",
    name: "authors",
    message: "Please provide contributing authors",
  },
  {
    type: "input",
    name: "github",
    message: "Please provide GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide email address",
  },
]);

const {
  title,
  description,
  installation,
  usage,
  contributing,
  tests,
  license,
  authors,
  github,
  email,
} = prompt;

const readmeText = `
  # ${title[0].toUpperCase()}${title.substring(1)}

  ${generateLicence(license)}

  ## Description
  ${description}

  ## Table of Contents
  ${generateTableOfContents(prompt)}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ## License
  ${license}

  ## Authors
  ${authors}

  ## Questions
  ${email}\n
  ${github}
`;

fs.writeFile("./README.md", readmeText, (err) =>
  err ? console.log(err) : console.log("Success!")
);
