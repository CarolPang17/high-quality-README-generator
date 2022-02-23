// // TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// // TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "motivation",
    message: "What was your motivation?",
    validate: (motivationInput) => {
      if (motivationInput) {
        return true;
      } else {
        console.log("Please enter your motivation!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "reason",
    message: "Why did you build this project?",
    validate: (reasonInput) => {
      if (reasonInput) {
        return true;
      } else {
        console.log("Please enter why did you build this project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "solvedProblem",
    message: "What problem does it solve?",
    validate: (solvedProblemInput) => {
      if (solvedProblemInput) {
        return true;
      } else {
        console.log("Please enter what problem does it solve!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "learned",
    message: "What did you learn?",
    validate: (learnedInput) => {
      if (learnedInput) {
        return true;
      } else {
        console.log("Please enter what did you learn!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "standOutPoint",
    message: "What makes your project stand out?",
    validate: (standOutPointInput) => {
      if (standOutPointInput) {
        return true;
      } else {
        console.log("Please enter what makes your project stand out!");
        return false;
      }
    },
  },
];

// // TODO: Create a function to write README file


// // TODO: Create a function to initialize app
function init() {
 inquirer.prompt(questions)
 .then((allAnswers) => {
  console.log(allAnswers);
});
}

// // Function call to initialize app
 init();
