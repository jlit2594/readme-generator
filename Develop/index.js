// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')

//
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Your project needs to have a title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project. (RECOMMENDED)'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide the steps required to install your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions on how to use your project.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Provide credits to show who all contributed to this project.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'If you would like other developers to contribute, you can include guidelines on how to do so here.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'If you have written tests for your application, provide examples on how to run them here.'
        },
        {
            type: 'input',
            name: 'user',
            message: 'Please enter your GitHub username here.',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your username.')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'emailConfirm',
            message: 'Would you like to enter an email address for contact information?',
            default: true
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
            when: ({ emailConfirm }) => {
                if (emailConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
