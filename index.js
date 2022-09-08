// needed packages
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What package is required to run your application?',
        name: 'package',
        default: 'inquirer',
    },
    {
        type: 'input',
        message: 'Enter command to create a package.json:',
        name: 'json',
        default: 'npm init'
    },
    {
        type: 'input',
        message: 'Enter command to install required package:',
        name: 'install',
        default: 'npm i inquirer@8.2.4',
    },
    {
        type: 'input',
        message: 'Enter command to start your application',
        name: 'start',
        default: 'node index',
    },
    {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions:',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose a license:',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'GNU GPLv3 License']
    }
];

// writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown(JSON.parse(data)), (err) => err ? console.error(err) : console.log("README successfully generated!")
    );
}

// initializes the application
function init() {
    inquirer  
        .prompt([
            questions[0], questions[1], questions[2], questions[3], questions[4], questions[5], questions[6], questions[7], questions[8], questions[9], questions[10], questions[11]
        ])
        .then((data) =>
            {const fileName = "README.md";
            writeToFile(fileName, JSON.stringify(data));
    }
        )
}

// calls initialization function
init();