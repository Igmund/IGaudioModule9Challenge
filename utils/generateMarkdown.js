// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    return '';
  } else {
    const licenseWithoutSpaces = license.replace(/\s/g, '');
    return `![license](https://img.shields.io/badge/${licenseWithoutSpaces}-pink.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None'){
    return '';
  } else {
  const licenseWithoutSpaces = license.replace(/\s/g, '');
    return `https://opensource.org/licenses/${licenseWithoutSpaces}`
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${renderLicenseBadge(data.license)}

  ## Username
  ${data.username}
 
  ## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Username](#username)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test Info](#test-info)
- [Contact Info](#contact-info)

## Installation
  ${data.instructions}

  ## Usage
  ${data.usageinfo}

  ## License
  ${renderLicenseLink(data.license)}

  ## Contribution
  ${data.contributions}

  ## Test Info
  ${data.test}

  ## Contact Info
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
