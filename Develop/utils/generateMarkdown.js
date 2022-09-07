// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`
}
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
if(license === 'MIT'){
  return 'https://opensource.org/licenses/MIT'
}else if ( license === 'APACHE2.0'){
  return 'https://www.apache.org/licenses/LICENSE-2.0'
}else if ( license === 'GPL3.0'){
  return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
}else if ( license === 'BSD3'){
  return 'https://opensource.org/licenses/BSD-3-Clause'
}else{return ''}

}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if ( license === 'None'){
  return ''
}else {
  return '## License '
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.project}
  https://github.com/${data.github}/${data.project}
  ## Description
  ${data.description}
  

  ## Table of Contents (Optional)
  - [Description](#Description)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  The comands needed to install dependecies are ${data.dependecies}
  
  ## Usage
  
  In order to use this app you need to, ${data.usage}
  
  ${renderLicenseSection()}
  
  This project is licensed under the ${data.license} license.
  ${renderLicenseLink()}

  ## Contributing 
  ${data.contributing}
  
  ## Tests
  
  You will need these commands to run the app ${data.test}

  ## Contact 

  email: ${data.email}
`;
}

module.exports = generateMarkdown;
