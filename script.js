var inquirer = require('inquirer');
var path = require('path');
const fs = require('fs');

// var writeToFile = require('writeToFile');
  inquirer
  .prompt([
      {
          type: 'input',
          name: 'What is the managers name?',
          ID: "What is the managers ID?",
          email: "What is the managers email address?",
          github: "What is the managers GitHub username?"
      }, 
      {

      type: 'input',
      name: 'What is the engineers name?',
      ID: "What is the engineers ID?",
      email: "What is the engineers email address?",
      github : "What is the engineers GitHub username?"
      },
      { 

    type: 'input',
    name: 'What is the interns name?',
    ID: "What is the interns ID?",
    email: "What is the interns email?",
    github: "What school does the intern attend?"
     }])

  .then((answers) => {
      console.log(answers.name)
      console.log(answers.id)
      console.log(answers.email)
      console.log(answers.github)
      console.log("Here is the info")

  })
 

  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(inquirerResponse => { 
    writeToFile("README.md", generateMarkdown({...inquirerResponse}))
  }) 
}

// Function call to initialize app
init();

