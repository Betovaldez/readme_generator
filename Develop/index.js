// TODO: Include packages needed for this application
var inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    // Question for title name
    {
        type: 'input',
        name: 'title',
        message: 'Enter the name of your project: ',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('The field needs data');
                return false;
            }
        }
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for the project: ',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('The field needs data');
                return false;
            }
        }
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install it: ',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('The field needs data');
                return false;
            }
        }
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use the application: ',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('The field needs data');
                return false;
            }
        }
    },
    // Contribution
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter how to contribute to this project: ',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('The field needs data');
                return false;
            }
        }
    },
    // Test Instructions 
    {
        type: 'input',
        name: 'testing',
        message: 'Enter a description how to test this project: ',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('The field needs data');
                return false;
            }
        }
    },
    // License
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project: ',
        choices: [
            "[MIT License](LICENSE.txt)", 
            "[GNU GPLv3 License](COPYING.txt)", 
          ],
          validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('The field needs data');
                return false;
            }
        }
    },
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username: ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('The field needs data');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();

