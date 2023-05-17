// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None'){
    return '';
  } else {
    return `![license](https://img.shields.io/badge/${license}-pink.svg)`
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return '';
  } else {
    return `https://opensource.org/licenses/${license}`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${userName(data.user)}

  ## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Username](#username)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Testing](#test)
- [Questions](#questions)
- [Contact Info](#contact-info)

`;
}

module.exports = generateMarkdown;
