const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please enter a description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please enter any installation instructions for this project.',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter a description about how to use this product.',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What type of licence does this project have?',
        name: 'license',
        choices: ['MIT','GNU', 'Apache' , 'BSD', 'None']
      },
      {
        type: 'input',
        message: 'Please enter information outlining how anyone else can contribute to the work of this project.',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Please enter description of any tests run for this project.',
        name: 'test',
      },
      {
        type: 'input',
        message: 'Please enter an email users can reach out to with any questions.',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Please enter your GitHub user name.',
        name: 'GitHub',
      },
      {
        type: 'input',
        message: 'Who is the author of this program?',
        name: 'author',
      },
  ];


  function writeToFile(data) {
    fs.writeFile("project-README.md", data, function (err) {
        err ? console.log(err) : console.log("project-README.md created!")
    });
}


// TODO: Create a function to initialize app
function init() {
  
  inquirer.prompt(questions)
  
  .then (answers => 
    writeToFile(generateMarkdown(answers)))
}
// Function call to initialize app
init();
 