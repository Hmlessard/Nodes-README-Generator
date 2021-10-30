// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is the title of your project?",
    "What is the description of this project?",
    "What command should be used to install dependencies?",
    "What does the user need to know about using the repo?",
    "What kind of license should the project have?",
    "What does the user need to know about contributing to the repo?",
    "What command will be used to run tests?"
];

//Function to prompt user for answers:
function userPrompts() {
    return inquirer.prompt([
        {
            type: "input",
            message: "questions[0]",
            name: "username"
        },
        {
            type: "input",
            message: "questions[1]",
            name: "email"
        },
        {
            type: "input",
            message: "questions[2]",
            name: "Title",
        },
        {
            type: "input",
            message: "questions[3]",
            name: "description",
        },
        {
            type: "input",
            message: "questions[4]",
            default: "npm i",
            name: "install",
        },
        {
            type: "input",
            message: "questions[5]",
            name: "usage",
        },
        {
            type: "list",
            message: "questions[6]",
            choices: ["MIT", "GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "None"],
            name: "license"
        },
        {
            type: "input",
            message: "questions[7]",
            name: "contributing"
        },
        {
            type: "input",
            message: "questions[8]",
            default: "npm test",
            name: "test"
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
