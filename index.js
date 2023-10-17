// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

// //: Create an array of questions for user input
const readme = 'README.md';
// // TODO Title
// // TODO intro
// TODO Table of Contents //TODO
// TODO Installation
// TODO Usage
// TODO License
// TODO Contribution
// TODO Tests
// TODO Questions

// const tempResponse = {
//   title: 'Javascript Quiz',
//   github: 'https://github.com/ThatZiro/Javascript-Quiz',
//   intro: `Step into the world of JavaScript mastery with our interactive JavaScript Quiz! Whether you're a coding enthusiast or a seasoned developer, this quiz is designed to put your JavaScript knowledge to the test. Challenge yourself with a variety of thought-provoking questions and sharpen your coding skills as you go. Our user-friendly interface ensures a seamless experience, and you'll receive instant feedback on your answers. Take the plunge into the JavaScript universe and see how well you really know this versatile language. Are you up for the challenge?`,
//   callToAction: 'Test your JavaScript knowledge today!',
//   signature: 'Brandon Barnes',
//   techstack: ['html', 'css', 'javascript'],
//   displayResponsive: true,
//   displayFlow: true,
//   displayLayout: true,
//   instructions: 'testing 3',
//   usage: 'nope',
//   license: 'MIT',
//   contributed: 'noone',
//   tests: 'testagain',
//   questions: 'no thanks',
//   twitter: 'ThatZiro',
//   email: 'imbrandonbarnes@gmail.com',
//   linkedin: 'brandon-barnes-4b2098232',
// };

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

function WriteToFile(fileName, data) {
  let readmeContent = BuildReadMe(data);
  fs.writeFileSync(fileName, readmeContent, (err) => {
    console.error(err);
  });
}

// // TODO: Create a function to initialize app
function init() {
  axios.get('https://api.github.com/licenses').then((response) => {
    const licenses = response.data.map((licenses) => licenses.name);
    const questions = [
      {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
      },
      { type: 'input', message: 'What is your github Repository?', name: 'github' },
      {
        type: 'input',
        message: 'please write a project intoduction?',
        name: 'into',
      },
      {
        type: 'input',
        message: 'please write a short Call To Action for your introduction',
        name: 'callToAction',
      },
      {
        type: 'input',
        message: 'What is your name to sign on the project?',
        name: 'signature',
      },
      {
        type: 'checkbox',
        message: 'Select the tech stacts that you have used:',
        name: 'techstack',
        choices: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'TailwindCSS', 'jQuery', 'React.js', 'Node.js', 'MongoDB'],
      },
      {
        type: 'confirm',
        message: 'Would you like to display a Responsive Section?',
        name: 'displayResponsive',
      },
      {
        type: 'confirm',
        message: 'Would you like to display a Flow Section?',
        name: 'displayFlow',
      },
      {
        type: 'confirm',
        message: 'Would you like to display a Layout Section?',
        name: 'displayLayout',
      },
      {
        type: 'input',
        message: 'Enter the instuctions for instalation (press enter to add a new line):',
        multiline: true,
        name: 'instalation',
      },
      {
        type: 'input',
        message: 'Enter the Useage for the application (press enter to add a new line):',
        multiline: true,
        name: 'usage',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: licenses,
      },
      {
        type: 'input',
        name: 'contributed',
        message: 'Please add any contributors (e.g : name - githublink) (Leave Empty to Remove)',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please add any tests that you have run recently (e.g : test - result) (Leave Empty to Remove)',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Please add any FAQ elements (e.g : question - answer)  Leave Empty to Remove)',
      },
      {
        type: 'input',
        name: 'twitter',
        message: 'Lastly the contact informations! Please give me your Twitch Handle? (Leave Empty to Remove)',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please give me your Email address? (Leave Empty to Remove)',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Please give me your linkedIn profile? (Leave Empty to Remove)',
      },
    ];
    inquirer.prompt(questions).then((response) => {
      WriteToFile(readme, response);
      console.log('All Inputs done for ' + response.title);
    });
  });

  // WriteToFile(readme, tempResponse);
}

// // Function call to initialize app
init();

function BuildReadMe(data) {
  //Static Header =================================================
  const ref = data.github.split('.com/')[1];
  const [username, repo] = ref.split('/');

  let content = `
  <a name="readme-top"></a>
  
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
  [![LinkedIn][linkedin-shield]][linkedin-url]
  `;

  //TODO Ask if they want an Icon

  content += `
  <div align="center">
  <a href="${data.github}">
  <img src="./README_Assets/README-Logo.png" alt="Logo" width="160" height="160">
  </a>

  <h3 align="center">${data.signature}</h3>

  <p align="center">${data.intro}
  </p>
  <p> – ${data.callToAction}</p>

  </div>
  </br>
  </br>

  <h3 font size="1" align="right"><a href="https://${username}.github.io/${repo}/" target="_blank">Visit Site🚀</a></h3>
  `;

  // Table Of Contents ========================================================================
  content += `
  <!-- TABLE OF CONTENTS -->
  <details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#sneak-peek">Sneak Peek</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
  </details>
  `;

  // Tech Stack ==================================================
  content += `
  ## Tech Stack
  <a name="tech-stack"></a>`;

  //HTML
  if (data.techstack.includes('html'))
    content += `
  ![HTML](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)`;
  //CSS
  if (data.techstack.includes('css'))
    content += `
  ![CSS](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)`;
  //Javascript
  if (data.techstack.includes('javascript'))
    content += `
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)`;

  content += `
  <p align="right">(<a href="#readme-top">back to top</a>)</p>`;

  // Sneak Peek ==============================================================================
  content += `
  ## Sneak Peek

  <a name="sneak-peek"></a>
  ![mockup720](./README_Assets/README-SneakPeak.png)

  ### <a href="https://${username}.github.io/${repo}/" target="_blank">Visit Site</a> 🚀

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  `;

  // Development =============================================================================
  content += `
  
  ## Development

  <a name="development"></a>
`;
  if (data.displayResponsive)
    content += `  
  <details>
    <summary  style="font-size:18px">Responsive Layouts</summary>
    <img src="./README_Assets/README-phone-preview.png" alt="Logo" width="1000">
  </details>`;

  if (data.displayFlow)
    content += `  
  <details>
    <summary  style="font-size:18px">Flow Chart</summary>
    <img src="./README_Assets/README-Chart-1.png" alt="Logo" width="1000">
  </details>`;

  if (data.displayLayout)
    content += `
  <details>
    <summary style="font-size:18px">Layout Design</summary>
    <img src="./README_Assets/README-Chart-2.png" alt="Logo" width="1000">
  </details>
  `;

  content += `
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  `;
  // Contact
  content += `
   ## Contact

  <a name="contact"></a>

  <h4>Twitter - <a href="https://twitter.com/${data.twtter}">@${data.twitter}</a></h4>
  <h4>Email - <a href="mailto:${data.email}">${data.email}</a></h4>
  <h4>Github - <a href="https://github.com/${username}">${username}</a></h4>
  <h4>Linkedin - <a href="https://www.linkedin.com/in/${data.linkedin}/">${data.signature}</a></h4>

  <p align="right">(<a href="#readme-top">back to top</a>)</p>`;
  // Footer Tags =================================================
  content += `
  <!-- MARKDOWN LINKS & IMAGES -->
  <!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

  [contributors-shield]: https://img.shields.io/github/contributors/${username}/${repo}.svg?style=for-the-badge
  [contributors-url]: https://github.com/${username}/${repo}/graphs/contributors
  [forks-shield]: https://img.shields.io/github/forks/${username}/${repo}.svg?style=for-the-badge
  [forks-url]: https://github.com/${username}/${repo}/network/members
  [stars-shield]: https://img.shields.io/github/stars/${username}/${repo}.svg?style=for-the-badge
  [stars-url]: https://github.com/${username}/${repo}/stargazers
  [issues-shield]: https://img.shields.io/github/issues/${username}/${repo}.svg?style=for-the-badge
  [issues-url]: https://github.com/${username}/${repo}/issues
  [license-shield]: https://img.shields.io/github/license/${username}/${repo}.svg?style=for-the-badge
  [license-url]: https://github.com/${username}/${repo}/blob/master/LICENSE.txt
  [linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
  [linkedin-url]: https://linkedin.com/in/linkedin_username

  `;

  return content;
}
