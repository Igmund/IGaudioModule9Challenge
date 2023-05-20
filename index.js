// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const gm = require('./utils/generateMarkdown')
const path = require('path')
let dir = '../Dist'

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        section: "Please give Github username"
      },
      {
        type: "input",
        name: "title",
        section: "Please give project title"
      },
      {
        type: "input",
        name: "description",
        section: "Please give description"
      },
      {
        type: "input",
        name: "contents",
        section: "Please give Table of Contents "
      },
      {
        type: "input",
        name: "instructions",
        section: "Please give installation instructions"
      },
      {
        type: "input",
        name: "usageinfo",
        section: "Please give usage information"
      },
      {
        type: "input",
        name: "contributions",
        section: "Please give contributors"
      },
      {
        type: "input",
        name: "test",
        section: "Please give any test instructions"
      },
      {
        type: 'list',
        name: 'license',
        section: 'Please choose a license (use arrow keys and hit enter)',
        choices: ['None', 'Apache 2.0', 'MIT', 'GNU GPLv3', 'Mozilla Public 2.0', 'Do What The F*ck You Want To Public License', 'The Unlicense']
    },
    {
        type: "input",
        name: "email",
        section: "Please give email address"
      },

];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data);
    console.log('check out your new README at')
}
// catch((err) => {
//     if (err) {
//       throw err;
//     }
// })
;

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile("README.md", gm({...answers}));
    })
}

// Function call to initialize app
init();
