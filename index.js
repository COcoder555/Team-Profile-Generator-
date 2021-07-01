const inquirer = require("inquirer");
const fs = require("fs");

const managerQuestions = [{
    type: "input",
    name: "name",
    message: "What is your team Manager's name?",

},
{
    type: "input",
    name: "id",
    message: "Enter team Managers's id?",

},
{
    type: "input",
    name: "email",
    message: "Enter team Managers's email",

},
{
    type: "input",
    name: "officeNumber",
    message: "Enter team Manager's office number?",

},]

const menu =[{
    type: "list",
    name: "newEmployee",
    choices:[
        "Add an Engineer"
        "Add an Intern"
        "Finished adding new Employee's"
    ]
}]

const engineerQuestion = [{
    type: "input",
    name: "name",
    message: "Enter Engineer's name",

},
{
    type: "input",
    name: "id",
    message: "Enter Engineer's id",

},
{
    type: "input",
    name: "email",
    message: "Enter is Engineer's email?",

},



{
    type: "input",
    name: "gitHub",
    message: "Enter Engineer GitHub user name?",

},]

const internQuestions = [{
    type: "input",
    name: "name",
    message: "Enter Intern's name",

},
{
    type: "input",
    name: "id",
    message: "Enter Intern's id",

},
{
    type: "input",
    name: "email",
    message: "Enter is Intern's email?",

},

{
    type: "input",
    name: "school",
    message: "Where did you go to school?",

},]


function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)

}

function init() {
    let manager;
    inquirer.prompt(managerQuestions).then(response => {
        console.log(response)
        writeToFile(index.html, generateMarkdown(response))
    })
}

// Function call to initialize app
init();