const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();

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
