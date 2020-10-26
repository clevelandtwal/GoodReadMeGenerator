const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require("os");
// array of questions for user
const questions = [
{
    type: "input",
    name: "github",
    message: "What is your github username?"
},

// what is your email?
{
    type: "input",
    name: "contact",
    message: "what is your email?"

},
// what's your project title?
{
    type: "input",
    name: "title",
    message: "what is your project title?"
},

// what's the project description?

{
    type: "input",
    name: "description",
    message: "provide a project description"
},

// what command needs to be run to install dependencies?

{
    type: "input",
    name: "dependencies",
    message: "what command needs to be run to install dependencies?"
},

// what licenses are you using?

{
    type: "list",
    name: "license",
    message: "what licenses are you using?",
    choices: [
        "MIT",
        "ISO",
        "BSD 3",
        "APACHE 2.0",
        "GPL 3.0",
        "None"
    ]
},

// what command needs to be run in order to run tests?

{
    type: "input",
    name: "tests",
    message: "what command needs to be run in order to run tests?"
},

// what does the user have to know about using this repo?

{
    type: "input",
    name: "repoinfo",
    message: "what does the user have to know about using this repo??"
},

// what does the user have to know in order to contribute to this repo?

{
    type: "input",
    name: "repocontribution",
    message: "what does the user have to know in order to contribute to this repo?"
},

// what is the link to this repo?

{
    type: "input",
    name: "repolink",
    message: "what is the link to this repo?"
},

]

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response =>
        writeToFile("Readme.md", generateMarkdown({...response}))
    )
}

    
    // call the function writeToFile using the data that we pass (ie the inquirer responses)


// function call to initialize program
init();