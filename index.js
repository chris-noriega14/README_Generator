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
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
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
