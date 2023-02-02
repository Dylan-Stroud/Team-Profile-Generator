const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const generateTeam = require("./src/helper.js");
team = [];

function runApp(){
    function createTeam(){
        inquirer.prompt([{
            type: "list",
            message: "What type of employee would you like to add to the team?",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern", "none"]
        }]).then(function(userInput){
            switch(userInput.addEmployee){
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;

                default:
                    htmlBuilder();
            }
        })
    }
    
    function addManager(){
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the Manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's ID number?"
            },
            {
                type: "input",
                name: "managerEmail",
                message:"What is the manager's email address?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message:"What is the manger's office number?"
            }
        ]).then(answers =>{
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            team.push(manager);
            createTeam();
        });
    }

    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's ID number?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message:"What is the engineer's email address?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message:"What is the engineer's Github Username?"
            }
        ]).then(answers =>{
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            team.push(engineer);
            createTeam();
        });
    }
    function addIntern(){
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's ID number?"
            },
            {
                type: "input",
                name: "internEmail",
                message:"What is the intern's email address?"
            },
            {
                type: "input",
                name: "internSchool",
                message:"What is the intern's School?"
            }
        ]).then(answers =>{
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            team.push(intern);
            createTeam();
        });
    }



    function htmlBuilder(){
        console.log("Team has been created!");
        fs.writeFileSync(outputPath, generateTeam(team), "utf-8");
    }

    createTeam();


}
runApp();