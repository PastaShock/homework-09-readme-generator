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
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does this app solve?',
    },
    {
        type: 'input',
        name: 'standout',
        message: 'What makes this project standout?',
    },
    {
        type: 'input',
        name: 'installInst',
        message: 'How is your project going to be installed?',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'How is your project going to be used?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How should users contribute to this project?',
    },
    {
        type: 'input',
        name: 'testInst',
        message: 'How is this app going to be tested?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license is this project going to use?',
        default: 'wtf',
        // Add function that takes the input from this question and matches it to a license from a list.
        // action: (answers) => {
        //   license = nodeApp(this).matchToList(listOfLicenses)
        // }
    },
    {
        type: 'input',
        name: 'ghUserName',
        message: 'What is your github user name?',
    },
    {
        type: 'input',
        name: 'emailAdd',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'ghUrl',
        message: 'What is the URL of your repo?'
    },
    {
        type: 'input',
        name: 'ghPages',
        message: 'What is the URL of your hosted page?',
    }
]
inquirer.prompt(prompts).then((answers) => {
    answersObj = JSON.stringify(answers, null, '   ');
    console.log(answersObj);

    fs.writeFile('README.md', `
# ${answers.projTitle}
![profile picture](https://github.com/${answers.ghUserName}.png?size=80)

created by: ${answers.ghUserName}

reach me: ${answers.emailAdd}

github pages: ${answers.ghPages}

github URL: ${answers.ghUrl}


## Table of Contents
[about](#about)

[Installation](#Installation)

[usage](#Usage)

[contribution](#Contribution)

[testing](#testing)

[license](#license)

## About

### Why did I make this project?
${answers.why}

![screenshot of the app](assets/screenshot.png)

### What problem does this app solve?
${answers.problem}

### What makes this app standout?
${answers.standout}

## Installation
${answers.installInst}

## Usage
${answers.usageInfo}

## Contribution
${answers.contribution}

## Testing
${answers.testInst}

## License
![license](https://img.shields.io/badge/license-${answers.license}-grey)

    `,
     (err) => {
         if (err) throw err;
         console.log('the file has been saved');
     })});


