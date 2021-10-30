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

//Choosing a license function, based on user input
function licenseType(response) {
    if (response.license == "MIT"){
        licenseType = "[![License: MIT](https://img.shields.io/badge/MIT-MITLicense-brightgreen)](https://choosealicense.com/licenses/apache-2.0/)";
    } if (response.license == "GNU GPLv3"){
        licenseType = "[![License: GNU GPLv3](https://img.shields.io/badge/GNU%20GPLv3-GNU%20GPLv3License-yellowgreen)](https://choosealicense.com/licenses/agpl-3.0/";
    } if (response.license == "Mozilla Public License 2.0"){
        licenseType = "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/MozillaPublicLicense-MPL%203.0-orange)](https://choosealicense.com/licenses/mpl-2.0/)";
    } if (response.license == "Apache License 2.0"){
        licenseType = "[![License: Apache License 2.0](https://img.shields.io/badge/ApacheLicense-Apache2.0-red)](https://choosealicense.com/licenses/apache-2.0/";
    } if (response.license == "Boost Software License 1.0"){
        licenseType = "[![License: Boost Software License 1.0](https://img.shields.io/badge/Boost%20Software-Boost%20Software%20License%201.0-blue)](https://choosealicense.com/licenses/bsl-1.0/";
    } else return;
    return licenseType;
    }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
