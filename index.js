const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")
const Employee = require("./lib/Employee");
const generateHTML = require("./lib/generateHTML")

let data=[];

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

const menuQuestions =[{
    type: "list",
    name: "newEmployee",
    choices:[
        "Add an Engineer",
        "Add an Intern",
        "Finished adding new Employee's",
    ]
}]

const engineerQuestions = [{
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

function menu(){
    inquirer.prompt(menuQuestions).then(response=>{
        switch(response.newEmployee){
            case "Add an Engineer": addEngineer();
            break;

            case "Add an Intern": addIntern();
            break;

            case "Finished adding new Employee's":writeToFile("./dist/index.html", generateHTML(data));
        };
    });
};

function addEngineer(){
    inquirer.prompt(engineerQuestions).then(response =>{
        let{name,id,email,gitHub}= response
        const engineer = new Engineer(name,id,email,gitHub);
        data.push(engineer);
        menu();
        
    }
        )

};

function addIntern(){
    inquirer.prompt(internQuestions).then(response =>{
        let{name,id,email,school}= response
        const intern = new Intern(name,id,email,school);
        data.push(intern);
        menu();
        
    }
        )
};


function writeToFile(fileName, data) {
    console.log("YOU CREATED AN HTML FILE!!!")
    return fs.writeFileSync(fileName, data)

};

function init() {
    let manager;
    inquirer.prompt(managerQuestions).then(response => {
        let{name,id,email,officeNumber}= response
        const manager = new Manager(name,id,email,officeNumber)
        data.push(manager)
        menu();
    })
};


init();

