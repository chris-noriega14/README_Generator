// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Application Name
${data.title}
## Table of Contents
[Description](#description)
<br/>
[Installation](#installation)
<br/>
[Usage](#usage)
<br/>
[Contributing](#contributing)
<br/>
[Tests](#tests)
<br/>
[License](#license)
<br/>
[Contact](#github)
<br/>
[Questions](#questions)
<br/>
<br>
## Description 
${data.description}
<br>
## Programming Languages
${data.stack}
<br>
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## License
${renderLicenseBadge(data.license)}
## Contact
GitHub Username: ${data.github}
Email Address: ${data.email}
## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
