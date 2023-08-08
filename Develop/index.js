// Packages needed for this application
const inquirer = require('inquirer') ;
const fs = require('fs');

const readmeAnswers = ({ title, description, usage, installation, license, contributors, test, email, username }) => `

# ${title}
![License Badge](https://img.shields.io/badge/License-${license}-blue)

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Description
${description}

# Usage 
${usage}

## Installation 
${installation}

# License 
This project is covered under the ${license} license.

## Contributors
${contributors}

## Tests 
${test}

## Questions 
For any additional questions or information, please contact me via the folllowing platform:
- Email:  ${email}
Additionally, feel free to view my other projects: 
- Github: [${username}](https://github.com/${username})
`;


//  An array of questions for user input using inquirer 
inquirer
.prompt([
{
    type: "input",
    name: "title" ,
    message:"Please enter your project's title:",
},
{
    type: "input",
    name:  "description",
    message: "Enter a detailed description of the project:",
},
{
    type: "input",
    name: "usage",
    message:"Provide a short description of the project's usage:",
},
{
    type: "input",
    name: "installation",
    message:"Provide any installation instructions required for the project:",
},
{
    type: "list",
    name: "license",
    message:"Please select the preferred licence for your project:",
    choices:["MIT", "Mozilla Public License", "The Unlicense"],
},

{
    type: "input",
    name: "contributors",
    message:"Enter any contributors to this project (including yourself):",
},
{
    type: "input",
    name: "test",
    message:"Provide your project tests, enter N/A if not applicable:",
},
{
    type:"input",
    name:"email",
    message:"Please provide your Email:",
}, 
{
    type: "input",
    name: "username",
    message:"Please provide your gitHub username:",
}

])
.then((answers) => {
    const readme = readmeAnswers(answers);

    fs.writeFile('README.md', readme, (err) =>
    err ? console.log(err) : console.log("You have successfully created a README.md file!")
    );
})
