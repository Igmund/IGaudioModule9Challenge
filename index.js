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
        name: "username",
        message: "Please give Github username:"
      },
      {
        type: "input",
        name: "title",
        message: "Please give project title:"
      },
      {
        type: "input",
        name: "description",
        message: "Please give short description:"
      },
       {
        type: "input",
        name: "instructions",
        message: "Please give installation instructions:"
      },
      {
        type: "input",
        name: "usageinfo",
        message: "Please give usage information:"
      },
      {
        type: "input",
        name: "contributions",
        message: "Please give contributors some guidelines:"
      },
      {
        type: "input",
        name: "testinfo",
        message: "Please describe any test instructions:"
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license (use arrow keys and hit enter)',
        choices: ['None', 'Apache 2.0', 'MIT', 'GNU GPLv3', 'Mozilla Public 2.0', 'Do What The F*ck You Want To Public License', 'The Unlicense']
    },
    {
        type: "input",
        name: "email",
        message: "Please give email address:"
      },

];
//Check generation output



// TODO: Create a function to write README file
function writeToFile(directory, fileName, data) {
  const filePath = path.join(directory, fileName);
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('An error occurred while writing the file:', err);
    } else {
      console.log('Check out your new README in the results folder!');
    }
  });
}


// TODO: Create a function to initialize app
function init() {
  console.log("Welcome to Igmund's README generator!\n");
    inquirer.prompt(questions)
    .then((answers) => {
         writeToFile("./results", "README.md", gm({...answers}));
             })
}

// Function call to initialize app
init();
