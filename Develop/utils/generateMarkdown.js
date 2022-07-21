// renders the license section based on the value chosen 
function renderLicenseSection(license) {
  const licenseValue = license.value
  // if no license is chosen, it returns an empty string
  if (!license) {
    return '';
  } else if (licenseValue === 'Apache 2.0 License') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (licenseValue === 'Boost Software License 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (licenseValue === 'BSD 3-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (licenseValue === 'BSD 2-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  } else if (licenseValue === 'CC0') {
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (licenseValue === 'Attribution 4.0 International') {
    return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)';
  } else if (licenseValue === 'Attribution-ShareAlike 4.0 International') {
    return '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)';
  } else if (licenseValue === 'Attribution-NonCommercial 4.0 International') {
    return '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)';
  } else if (licenseValue === 'Attribution-NoDerivatives 4.0 International') {
    return '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)';
  } else if (licenseValue === 'Attribution-NonCommercial-ShareAlike 4.0 International') {
    return '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)';
  } else if (licenseValue === 'Attribution-NonCommericla-NonDerivatives 4.0 International') {
    return '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)';
  } else if (licenseValue === 'Eclipse Public License 1.0') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  } else if (licenseValue === 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (licenseValue === 'GNU GPL v2') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  } else if (licenseValue === 'GNU AGPL v3') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  } else if (licenseValue === 'GNU LGPL v3') {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
  } else if (licenseValue === 'GNU FDL v1.3') {
    return '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)';
  } else if (licenseValue === 'The Hippocratic License 2.1') {
    return '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)';
  } else if (licenseValue === 'The Hippocratic License 3.0') {
    return '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)';
  } else if (licenseValue === 'IBM Public License Version 1.0') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  } else if (licenseValue === 'ISC License (ISC)') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else if (licenseValue === 'The MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (licenseValue === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (licenseValue === 'Attribution License (BY)') {
    return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
  } else if (licenseValue == 'Open Database License (ODbL)') {
    return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)';
  } else if (licenseValue === 'Public Domain Dedication and License (PDDL)') {
    return '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)';
  } else if (licenseValue === 'The Perl License') {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
  } else if (licenseValue === 'The Artistic License') {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
  } else if (licenseValue === 'SIL Open Font License 1.1') {
    return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
  } else if (licenseValue === 'The Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else if (licenseValue === 'The Do What the F*** You Want to Public License') {
    return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
  } else if (licenseValue === 'The zlib/libpng License') {
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
  }
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
