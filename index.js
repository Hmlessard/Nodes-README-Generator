// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
//Where did this come from?  Did I mean to do something with this?
//const { features } = require("process");
const codeBlock = "```";
let license = "";

const generate = util.promisify(fs.writeFile);

// Questions for user:
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is the title of your project?",
    "What is the description of this project?",
    "What command should be used to install dependencies?",
    "What does the user need to know about using the repo?",
    "Who will be contributing to the repo?",
    "What kind of license should the project have?",
    "What features does this project have?",
    "What guidelines do you have for contributors?",
    "What command will be used to run tests?"
];

//Function to prompt user for answers:
function userPrompts() {
    return inquirer.prompt([
        //Username
        {
            type: "input",
            message: questions[0],
            name: "username"
        },

        //email
        {
            type: "input",
            message: questions[1],
            name: "email"
        },
        //title of project
        {
            type: "input",
            message: questions[2],
            name: "title",
        },
        //project description
        {
            type: "input",
            message: questions[3],
            name: "description",
        },
        //Dependencies to install
        {
            type: "input",
            message: questions[4],
            default: "npm i",
            name: "install",
        },
        //instructions and examples for use of repo
        {
            type: "input",
            message: questions[5],
            name: "usage",
        },
        //Contributor Credits
        {
            type: "input",
            message: questions[6],
            name: "contributors"
        },
        //Licensing
        {
            type: "list",
            message: questions[7],
            choices: ["MIT", "GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "None"],
            name: "licenseType"
        },
        //Features
        {
            type: "input",
            message: questions[8],
            name: "features"
        },
        //Contributing Guidelines
        {
            type: "input",
            message: questions[9],
            name: "guidelines"
        },
        //Testing
        {
            type: "input",
            message: questions[10],
            default: "npm test",
            name: "test"
        },
    ])
}

//Choosing a license function, based on user input
function licenseType(response) {
    if (response.license == "MIT"){
        license = "[![License: MIT](https://img.shields.io/badge/MIT-MITLicense-brightgreen)](https://choosealicense.com/licenses/apache-2.0/)";
    } if (response.license == "GNU GPLv3"){
        license = "[![License: GNU GPLv3](https://img.shields.io/badge/GNU%20GPLv3-GNU%20GPLv3License-yellowgreen)](https://choosealicense.com/licenses/agpl-3.0/";
    } if (response.license == "Mozilla Public License 2.0"){
        license = "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/MozillaPublicLicense-MPL%203.0-orange)](https://choosealicense.com/licenses/mpl-2.0/)";
    } if (response.license == "Apache License 2.0"){
        license = "[![License: Apache License 2.0](https://img.shields.io/badge/ApacheLicense-Apache2.0-red)](https://choosealicense.com/licenses/apache-2.0/";
    } if (response.license == "Boost Software License 1.0"){
        license = "[![License: Boost Software License 1.0](https://img.shields.io/badge/Boost%20Software-Boost%20Software%20License%201.0-blue)](https://choosealicense.com/licenses/bsl-1.0/";
    } else return;
    return license;
    }


// function writeToFile(response)
    function writeToFile(response) {
    return `
        # ${response.title}
        ${license}

        ## Description
        ${response.description}

        ## Table of Contents
            *[Installation](#installation)
            *[Usage](#usage)
            *[Credits](#credits)
            *[License](#license)
            *[Badges](#badges)
            *[Features](#features)
            *[Contributing](#contributing)
            *[Tests](#tests)


        ## Installation
        To install dependencies, run this command:
            ${codeBlock}
            ${response.install}
            ${codeBlock}

        ## Usage
            ${response.usage}

        ## Credits
        ${response.contributors}

        ## License
            This project is licensed under ${response.license} license

        ## Features

        ## Contributing
            

        ## Tests
            ${codeBlock}
            ${response.test}
            ${codeBlock}

        ##Questions
        If you have any questions, please feel free to contact me at ${response.email}.  You can view more of my work at ${response.username}(https://github/${response.username}).`;
    
}

// Function to initialize app
async function init() {
    try {
        const response = await userPrompts();
        licenseType(response);
        const readme = writeToFile(response);
        await generate('./dist/README.md', readme);
        console.log("README.md created");
        } catch(err) {
            console.log(err);
    }
}

// Function call to initialize app
init();
