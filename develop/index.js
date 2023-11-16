const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const Badge = require('./utils/generateMarkdown')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your README?',
            name: 'title',
            validate: (answer) => {
                if(answer) {
                    return true
                } else {
                    return 'Please enter a valid title'
                }
            }
        },
        {
            type: 'input',
            message: 'Give a detailed description of your project.',
            name: 'description',
            validate: (answer) => {
                if(answer) {
                    return true
                } else {
                    return 'Please enter a valid title'
                }
            }
        },
        {
            type: 'input',
            message: 'Give a detailed description of how to install your application.',
            name: 'installation',
            validate: (answer) => {
                if(answer) {
                    return true
                } else {
                    return 'Please enter a valid title'
                }
            }
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.',
            name: 'usage',
            validate: (answer) => {
                if(answer) {
                    return true
                } else {
                    return 'Please enter a valid title'
                }
            }
        },
        {
            type: 'list',
            message: 'What license would you like for your project?',
            name: 'license',
            choices: [
                "MIT License",
                "GNU General Public License (GPL)",
                "GNU Affero General Public License (AGPL)",
                "Apache License 2.0",
                "BSD License (2-clause)",
                "BSD License (3-clause)",
                "Creative Commons Zero (CC0)",
                "Mozilla Public License 2.0",
                "ISC License"],
            validate: (answer) => {
                if(answer) {
                    return true
                } else {
                    return 'Please enter a valid title'
                }
            }
        },
        {
            type: 'input',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you would prefer.',
            name: 'contributing',
            validate: (answer) => {
                if(answer) {
                    return true
                } else {
                    return 'Please enter a valid title'
                }
            }
        },
        {
            type: 'input',
            message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
            name: 'tests',
            validate: (answer) => {
                if(answer) {
                    return true
                } else {
                    return 'Please enter a valid title'
                }
            }
        },
        {
            type: 'input',
            message: 'Please enter your github profile.',
            name: 'questionsGithub',
            validate: (answer) => {
                if(answer) {
                    return true
                } else {
                    return 'Please enter a valid title'
                }
            }
        },
        {
            type: 'input',
            message: 'Please enter your email.',
            name: 'questionsEmail',
            validate: (answer) => {
                if(answer) {
                    return true
                } else {
                    return 'Please enter a valid title'
                }
            }
        },
    ]).then(answers => {
        let badgeMarkdown = Badge.renderLicenseBadge(answers.license);


        const content =`# ${answers.title} ${badgeMarkdown}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Licensing](#licensing)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)
\n
\n
## Installation
\n
${answers.installation}
\n
## Usage
\n
${answers.usage}
\n
## Licensing
\n
${answers.license}
\n
## Contributing
\n
${answers.contributing}
\n
## Test
\n
${answers.tests}
\n
## Questions
\n
${answers.questionsGithub}
${answers.questionsEmail}
\n
`
        fs.appendFile(path.join('../generatedReadme', 'README.md'), content, err => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('README.md created successfully.');
    });
})
    
