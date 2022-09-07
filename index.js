// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
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
        message: 'Enter usage information:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license:',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'GPU GPLv3 License']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.write(fileName, markdown.generateMarkdown(data), (err) => err ? console.error(err) : console.log("README successfully generated!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer  
        .prompt([
            questions[0], questions[1], questions[2], questions[3], questions[4], questions[5]
        ])
        //may need to stringify
        const fileName = "README.md";
        writeToFile(fileName, data);
}

// Function call to initialize app
init();