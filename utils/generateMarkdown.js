// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const apacheLicense = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  const gpuLicense = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  const mitLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  if(license === "MIT License") {
    return mitLicense;
  }
  else if(license === "Apache License 2.0") {
    return apacheLicense;
  }
  else if (license === "GPU GPLv3 License") {
    return gpuLicense;
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const mitLink = "https://choosealicense.com/licenses/mit/";
  const gpuLink = "https://choosealicense.com/licenses/gpl-3.0/";
  const apacheLink = "https://choosealicense.com/licenses/apache-2.0/";
  if(license === "MIT License") {
    return mitLink;
  }
  else if(license === "Apache License 2.0") {
    return apacheLink;
  }
  else if (license === "GPU GPLv3 License") {
    return gpuLink;
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License\n
  This application is covered under the ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description\n\n${data.description}\n
  ## Table of Contents\n
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation\n
  The ${data.package} package is required to run this application. Run the following command in the command line to initialize a new package:\n
  ~~~
  ${data.json}
  ~~~
  \nThen, run the following command in the command line to install the required package:\n 
  ~~~
  ${data.install}
  ~~~

  ## Usage\n
  To run this application, enter the following command in the command line:\n
  ~~~
  ${data.start}
  ~~~
  \n${data.usage}

  ${renderLicenseSection(data.license)}.
  To view a description of this license type, click [here](${renderLicenseLink(data.license)}).

  ## Contributing\n
  ${data.contribution}
  
  ## Tests\n
  ${data.test}

  ## Questions\n
  If you have any questions or would like to provide feedback, do not hesitate to view my GitHub profile at [https://github.com/${data.username}](https://github.com/${data.username}) or contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;