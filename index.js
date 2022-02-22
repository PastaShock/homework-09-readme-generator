// take input from the user in the command line
const inquirer = require('inquirer');
const fs = require('fs');

// ask for project title
// ask for description
// installation instructions
// usage information
// contribution guidelines
// test instructions
// prompt the user to select a license from a list
// ask for a github username
// ask for an email address
// create a table of contents that has clickable links to the parts of the readme

const prompts = [
    {
        type: 'input',
        name: 'projTitle',
        message: 'What is the title of your project?',
        // action: () => {
        //     answers.projTitle
        // }
    },
    {
        type: 'input',
        name: 'installInst',
        message: 'How is your project going to be installed?',
        // action: () => {
        //     answers => { console.info('Answer:', answers.projTitle); }
        // }
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'How is your project going to be used?',
        // action: () => {
        //     answers => { console.info('Answer:', answers.projTitle); }
        // }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How should users contribute to this project?',
        // action: () => {
        //     answers => { console.info('Answer:', answers.projTitle); }
        // }
    },
    {
        type: 'input',
        name: 'testInst',
        message: 'How is this app going to be tested?',
        // action: () => {
        //     answers => { console.info('Answer:', answers.projTitle); }
        // }
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license is this project going to use?',
        default: 'wtf',
        // action: () => {
        //     answers => { console.info('Answer:', answers.projTitle); }
        // }
    },
    {
        type: 'input',
        name: 'ghUserName',
        message: 'What is your github user name?',
        // action: () => {
        //     answers => { console.info('Answer:', answers.projTitle); }
        // }
    },
    {
        type: 'input',
        name: 'emailAdd',
        message: 'What is your email address?',
        // action: () => {
        //     answers => { console.info('Answer:', answers.projTitle); }
        // }
    }
]
inquirer.prompt(prompts).then((answers) => {
    answersObj = JSON.stringify(answers, null, '   ');
    console.log(answersObj);

    fs.writeFile('README.md', `
# ${answers.projTitle}
created by: ${answers.ghUserName}
reach me: ${answers.emailAdd}

## Installation instructions:
${answers.installInst}

## Use this project to:
${answers.usageInfo}

## How to contribute
${answers.contribution}

## testing
${answers.testInst}

## license
${answers.license}

    `,
     (err) => {
         if (err) throw err;
         console.log('the file has been saved');
     })});


