// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT") {
    //render mit badge
  }
  else if(license === "Apache License 2.0") {
    //render badge
  }
  else if (license === "GPU GPLv3") {
    //render badge
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT") {
    //render mit link
  }
  else if(license === "Apache License 2.0") {
    //render link
  }
  else if (license === "GPU GPLv3") {
    //render link
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  return `## Description\n\n${data.description}\n`;
  return `## Table of Contents\n
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  `;
  return `## Installation\n
  Run the following command in the command line:
    npm init
  Run the following command in the command line:
    npm i inquirer@8.2.4
  `;
  return `## Usage\n
  ${data.usage}
  `;
  renderLicenseSection(data.license);
  return `## Contributing\n
  If you would like to contribute
  `;
  //tests section
  return `## Questions\n
  If you have any questions, do not hesitate to view my GitHub profile at [https://github.com/${data.username}](https://github.com/${data.username}) or contact me at ${data.email}.`
}

module.exports = generateMarkdown;