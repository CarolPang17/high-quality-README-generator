
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generatorMarkdown = require(path.join(
  __dirname,
  "/Develop/utils/generateMarkdown"
));

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is the your username of github?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project?"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use.",
  },
  {
    type: "input",
    name: "motivation",
    message: "What was your motivation?",
  },
  {
    type: "input",
    name: "features",
    message: "what is the Features of this project?"
  },
  {
    type: "list",
    name: "license",
    message: "What liscence is being used? please pick one from below",
    choices: ["other / none","AGPL-3.0","Apache-2.0","BSD-2-Clause","BSD-3-Clause","BSL-1.0","CC0-1.0","EPL-2.0","GPL-2.0","GPL-3.0","LGPL-2.1","MIT","MPL-2.0"]
  },
  {
    type: "input",
    name: "contributing",
    message:"Who contributed to this project?:"
  },
  {
    type: "input",
    name: "tests",
    message: "What commands are needed to test this app?"
},
{
  type: "input",
  name: "contact",
  message: "What is the your contact email if anyone have question?",
}

];


function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      console.log(fileName);
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

function init() {
  inquirer.prompt(questions)
  .then((allAnswers) => {
    writeToFile("README.md", generatorMarkdown(allAnswers)).then((res) => {
      console.log(res);
    });

  })
}

init();
