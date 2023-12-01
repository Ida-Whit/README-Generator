const fs = require('fs');
const inquirer = require('inquirer');

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
        message: 'Please enter a description on the usage of this project.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please enter how anyone else can contribute to the work of this project.',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Please enter description of any tests that were run.',
        name: 'tests',
      },
      {
        type: 'list',
        message: 'What type of licence does this project have?',
        name: `licence`,
        choices: [`MIT`, `GPL`, `Apache` , `GNU`, `N/A`]
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


inquirer.prompt(questions.name)
  .then(function(data) {
    const template = 
    `Project Name: ${title}
    Description: ${description}
    Badges: ${badges}
    Installation: ${installation}
    Usage: ${usage}
    Contributing: ${constribution}
    Support:
      Email: ${email}
      GitHub: ${GitHub}
    Author: ${author}
    License: ${licence}`;

    function writeToFile(fileName, data) {
      fs.writeFile(`./${fileName.toLowerCase().split(` `).join(``)}.md`, data, (err)=>{
        if(err){
          console.log(err)
        }
        console.log("Your README has been generated!");
      })
    }
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
 