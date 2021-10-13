// TODO: Include packages needed for this application
var generateMarkdown = require("./utils/generateMarkdown");
var inquirer = require('inquirer');
var updateFile = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your app?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your app?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please require a detailed explanation on how to install your app',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage details',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who were the contributors to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What is the test process for the project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licenses are used for this project?',
        choices: ['ICS', 'MIT', 'Mozilla', 'GNU3']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'checkbox',
        message: 'What programming languages do you know?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
        type: 'input',
        name: 'questions',
        message: 'If you have any questions, you can contact me at:',
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response){
        updateFile.writeFile("README_Gen.md",generateMarkdown(response),(err) =>
        err ? console.log(err) : console.log('Success!'))
    });
}

// Function call to initialize app
init();
