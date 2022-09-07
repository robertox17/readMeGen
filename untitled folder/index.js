// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const util = require('util')

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    message:'What is your GitHub username?',
    name:'github'
}, {
    type:'input',
    message: 'What is your email address?',
    name:'email'
} ,{
    type:'input',
    message: 'what is your projects name ?',
    name:'project'
},{
    type:'input',
    message:'Please write a short description of your project',
    name:'description'
},{
    type:'list',
    message:'What kind of license should your project have?',
    choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None'],
    name:'license'
}, {
    type:'input',
    message:'What command should be run to install dependencies?',
    name:'dependencies'
}, {
    type:'input',
    message:'What command should be run to run tests?',
    name:'test'
}, {
    type:'input',
    message: 'What does the user need to know about using the repo?',
    name:'usage'
}, {
    type:'input',
    message: 'What does the user need to know about contributing to the repo?',
    name:'contributing'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err =>  {
        console.log(fileName);
        console.log(data);
        if(err){
            return console.log(err)
        }else {
            console.log('success')
        }

    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile('READ.md', generateMarkdown(data));
        console.log(data)
    }) 

}

// Function call to initialize app
init();
