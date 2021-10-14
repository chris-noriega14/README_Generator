// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === "ISC") {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }
  else if (license === "GNU3") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  else if (license === "Mozilla") {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  else {
    return ''
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `This application is licensed by MIT. URL Link:(https://opensource.org/licenses/MIT)`
  }
  else if (license === "ISC") {
    return 'This application is licensed by ISC. URL Link:(https://opensource.org/licenses/ISC)'
  }
  else if (license === "GNU3") {
    return 'This application is licensed by GNU3. URL Link:(https://www.gnu.org/licenses/gpl-3.0)'
  }
  else if (license === "Mozilla") {
    return 'This application is licensed by Mozilla. URL Link:(https://opensource.org/licenses/MPL-2.0)'
}
  else {
    return 'This application is not licensed.'
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}
<br>
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
[Contact](#contact)
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
${renderLicenseLink(data.license)}
<br>
## Contact
GitHub: ${data.contact}
<br>
Email: ${data.email}
## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
