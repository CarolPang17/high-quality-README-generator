
function renderLicenseBadge(license,username,title) {
  if(license == "other / none"){
    return '';
  }
 return`![alt text](https://img.shields.io/github/license/${username}/${title})`
}

function renderLicenseLink(license) {
  if(license == "other / none"){
    return '';
  }
  return '* [License](#license)'
}


function renderLicenseSection(license) {
  if(license == "other / none"){
    return '';
  }
 return `# License \n This project is licensed under the ${license} license. `
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  https://github.com/${data.username}/${data.title}

  ${renderLicenseBadge(data.license,data.username,data.title)}

  # Description
  ${data.description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Motivation](#motivation)
  * [Features](#features)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  Contributing, Tests, and Questions

  # Installation
  Below are the steps required to install for this project:
  ${data.installation}

  # Usage
  below is the instructions to use this app:
  ${data.usage}

  # Motivation
  ${data.motivation}

  # Features
  ${data.features}

  ${renderLicenseSection(data.license)}

  # Contributing
  ​Contributors: ${data.contributing}

  # Tests
  ${data.tests}

  # Questions
  If you have any questions about the repo, please contact ${data.username} directly at : ${data.contact}.
  `
}

module.exports = generateMarkdown;
