// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  if (license != "None") {
    badge = "![License Badge](https://img.shields.io/badge/" + license + "-blue)"
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
    case "MIT":
      licenseLink = "https://opensource.org/license/mit/";
      break;
    case "GNU":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html"
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0"
      break;
    case "BSD":
      licenseLink = "https://opensource.org/license/bsd-3-clause/"
      break;
    default:
      licenseLink = "";
      break
  }

  return licenseLink

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";

  if (license != "None") {
    licenseSect += "## License \n"
    licenseSect += "Please see " + renderLicenseLink(license) + " to get detailed information about this license\n";
  }
  return licenseSect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = ["title", "description", "installation", "test", "usage", "GitHub", "guidelines", "author"];
  `## Title
  ${title}
  
  ## Description
  ${description}
  
  ## Installation
  ${installation}
  
  ${test}
  
  ## Usage
  ${usage}
  
  ## Support
  You can find me at https://github.com/${GitHub}. You can reach out to me with any questions regarding this project at ${email}.
  
  ## Contributing
  ${guidelines}
  
  ## Authors and acknowledgment
  This project was written by ${author}.
  
  ## License
  renderLicenseBadge(license)
  renderLicenseLink(license)
  renderLicenseSection(license)
  
  ## Project status`
  

  return markdown;
}


module.exports = generateMarkdown;
