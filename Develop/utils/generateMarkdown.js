// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseChoice = license.value;
  if (!license) {
    return '';
  } else {
    return `[![License](https://img.shields.io/badge/License-${licenseChoice}.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
    ${renderLicenseBadge}${renderLicenseLink}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(markdownData) {
  const { title, description, ...data } = markdownData;
  return `
  # ${data.title}

  ${renderLicenseSection(license)}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [Contribution Guidelines](#contribution)
  [Testing](#testing)
  [Contact Info](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Contribution Guidelines
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Contact 
  ${data.user}
  You can reach me at ${data.email} for further inquiries.

`;
}

module.exports = generateMarkdown;
