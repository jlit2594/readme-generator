// Packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

const readMeData = [];

// Inquiries that the user needs to answer to build the README
const promptQuestions = () => {
    console.log(`
    ===============================
    Welcome to the README Generator
    ===============================
    `);
    
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
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add any licenses to your README?',
            default: true
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose which licenses to add. If unsure, you should read up on what each license means.',
            choices: [
                'Apache 2.0 License',
                'Boost Software License 1.0', 
                'BSD 3-Clause License',
                'BSD 2-Clause License', 
                'CC0',
                'Attribution 4.0 International',
                'Attribution-ShareAlike 4.0 International',
                'Attribution-NonCommercial 4.0 International',
                'Attribution-NoDerivatives 4.0 International',
                'Attribution-NonCommercial-ShareAlike 4.0 International',
                'Attribution-NonCommericla-NonDerivatives 4.0 International', 
                'Eclipse Public License 1.0', 
                'GNU GPL v3',
                'GNU GPL v2',
                'GNU AGPL v3',
                'GNU LGPL v3',
                'GNU FDL v1.3', 
                'The Hippocratic License 2.1',
                'The Hippocratic License 3.0', 
                'IBM Public License Version 1.0', 
                'ISC License (ISC)', 
                'The MIT License', 
                'Mozilla Public License 2.0', 
                'Attribution License (BY)',
                'Open Database License (ODbL)',
                'Public Domain Dedication and License (PDDL)', 
                'The Perl License', 
                'The Artistic License',
                'SIL Open Font License 1.1', 
                'The Unlicense', 
                'The Do What the F*** You Want to Public License', 
                'The zlib/libpng License'
            ],
            when: ({confirmLicense}) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            }
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
    .then(answers => {
        readMeData.push(answers);
        return readMeData;
    });
};

// Initalizes questionnaire, then sends the data to generateMarkdown to write the file
promptQuestions()
    .then(readMeData => {
        const readMe = generateMarkdown(readMeData);

        fs.writeFile('./README.md', readMe, err => {
            if (err) throw new Error (err);

            console.log('Your README has now been created!')
        })
    })
;
