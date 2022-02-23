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

const licenses = [
    apache2 = {
        name: 'apache 2.0',
        value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    },
    boost = {
        name: 'boost 1.0',
        value: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    },
    bsd3 = {
         name: 'BSD 3-Clause',
         value: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
     },
    bsd2 = {
         name: 'BSD 2-Clause License',
         value: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
     },
    cc0 = {
         name: 'CC0',
         value: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
     },
    ccBy4 = {
         name: 'Attribution 4.0 International',
         value: '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)'
     },
    ccNc = {
         name: 'Attribution-NonCommmercial-ShareAlike 4.0 International',
         value: '[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)'
     },
    ccBa = {
         name: 'Attribution-NonCommercial-NoDerivatives 4.0 International',
         value: '[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)'
     },
    gnu3 = {
         name: 'GNU GPL v3',
         value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
     },
    hippo = {
         name: 'The Hippocratic License 3.0',
         value: '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)'
     },
    ibm = {
         name: 'IBM Public License Version 1.0',
         value: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
     },
    mit = {
         name: 'The MIT License',
         value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
     },
    mpl = {
         name: 'Mozilla Public License 2.0',
         value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
     },
    attribution = {
         name: 'Attribution License (BY)',
         value: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
     },
    pddl = {
         name: 'Public Domain Dedication and License (PDDL)',
         value: '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)'
     },
    wtfpl = {
         name: 'The Do What the Fuck You Want to Public License',
         value: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
     }
]

const prompts = [
    {
        type: 'input',
        name: 'projTitle',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'ghUserName',
        message: 'What is your github user name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'emailAdd',
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'ghUrl',
        message: 'What is the URL of your repo?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the URL of your repo');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'ghPages',
        message: 'What is the URL of your hosted page?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please explain why this project was made and what need it fills.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'standout',
        message: 'What makes this project standout?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please explain why this project is better than others.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installInst',
        message: 'How is your project going to be installed?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'How is your project going to be used?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please explain how to use this project');
                return false;
            }
        }
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
        default: 'jest index.js'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is this project going to use?',
        default: 'wtf',
        choices: licenses
    }
]
inquirer.prompt(prompts).then((answers) => {
    answersObj = JSON.stringify(answers, null, '   ');
    console.log(answersObj);
    // console.log(licenseSel, '\n', answers.license)

    fs.writeFile('README.md', `
${answers.license}
# ${answers.projTitle}
![profile picture](https://github.com/${answers.ghUserName}.png?size=80)

created by: ${answers.ghUserName}

reach me: ${answers.emailAdd}

github pages: ${answers.ghPages}

github URL: ${answers.ghUrl}


## Table of Contents
- [about](#about)
- [Installation](#Installation)
- [usage](#Usage)
- [contribution](#Contribution)
- [testing](#testing)
- [license](#license)

## About

### Why did I make this project?
${answers.why}

![screenshot of the app](assets/screenshot.png)

### What makes this app standout?
${answers.standout}

## Installation
\`\`\`${answers.installInst}\`\`\`

## Usage

${answers.usageInfo}

## Contribution
${answers.contribution}

## Testing
\`\`\`${answers.testInst}\`\`\`

## License
This project is using ${answers.license}

    `,
        (err) => {
            if (err) throw err;
            console.log('the file has been saved');
        })
});


