const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const pageTemplate = require('./src/page-template.js');
const {writeFile, copyFile} = require('./utils/generate-site.js');

const newEmployees = [];

const addEmployee = () => {
    console.log('=== === ===')
    console.log('Team Profile Builder')
    console.log('=== === ===')
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Name: ',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Name is required.')
                    return false
                }
            }
        }, {
            name: 'id',
            type: 'input',
            message: 'ID: ',
            validate: idInput => {
                if (idInput) {
                    return true
                } else {
                    console.log('ID is required.')
                    return false
                }
            }
        }, {
            name: 'email',
            type: 'input',
            message: 'Email address: ',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log('Email is required.')
                    return false
                }
            }
        }, {
            name: 'role',
            type: 'list',
            message: 'Which type of employee would you like to add?',
            choices: ['Intern', 'Manager', 'Engineer']
        }])
        .then(employeeDataObj => {
            checkRole(employeeDataObj)
        })
};

const checkRole = employeeDataObj => {
        const {name, id, email, role} = employeeDataObj
        
        if(role === 'Intern') {
            addIntern(employeeDataObj)
        }
        if(role === 'Manager') {
            addManager(employeeDataObj)
        }
        if(role === 'Engineer') {
            addEngineer(employeeDataObj)
        }
}

const addIntern = employeeDataObj => {
    inquirer.prompt({
        name: 'school',
        type: 'input',
        message: `Which school did ${employeeDataObj.name} attend?`
    }).then(school => {
        employeeDataObj.school = school
        newEmployees.push(employeeDataObj)
        
        inquirer.prompt({
            name: 'confirmAddEmployee',
            type: 'confirm',
            message: 'Would you like to add another employee?',
        })
        .then(employeeDataObj => {
            if(employeeDataObj.confirmAddEmployee) {
                return addEmployee(employeeDataObj);
            } else {
                console.log(newEmployees)
                return employeeDataObj
            }
        })
    })
}

const addManager = employeeDataObj => {
    inquirer.prompt({
        name: 'officeNumber',
        type: 'input',
        message: `What is ${employeeDataObj.name}'s office phone number?`
    }).then(officeNumber => {
        employeeDataObj.officeNumber = officeNumber
        newEmployees.push(employeeDataObj)
        
        inquirer.prompt({
            name: 'confirmAddEmployee',
            type: 'confirm',
            message: 'Would you like to add another employee?',
        })
        .then(employeeDataObj => {
            if(employeeDataObj.confirmAddEmployee) {
                return addEmployee(employeeDataObj);
            } else {
                console.log(newEmployees)
                return employeeDataObj
            }
        })
    })
}

const addEngineer = employeeDataObj => {
    inquirer.prompt({
        name: 'github',
        type: 'input',
        message: `What is ${employeeDataObj.name}'s GitHub username?`
    }).then(github => {
        employeeDataObj.github = github
        newEmployees.push(employeeDataObj)
        
        inquirer.prompt({
            name: 'confirmAddEmployee',
            type: 'confirm',
            message: 'Would you like to add another employee?',
        })
        .then(employeeDataObj => {
            if(employeeDataObj.confirmAddEmployee) {
                return addEmployee(employeeDataObj);
            } else {
                console.log(newEmployees)
                return employeeDataObj
            }
        })
    })
}

addEmployee()
