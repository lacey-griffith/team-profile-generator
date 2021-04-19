const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')


const newEmployeeArr = [];

const init = () => {
    addEmployee();
}

const addEmployee = () => {
    console.log('=== === ===')
    console.log('Team Profile Builder')
    console.log('=== === ===')
    return inquirer.prompt([{
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
            const {
                name,
                id,
                email,
                role
            } = employeeDataObj

            if (role === 'Intern') {
            return inquirer.prompt({
                    name: 'school',
                    type: 'input',
                    message: `Which school did ${employeeDataObj.name} attend?`
                }).then(school => {
                    const employee = new Intern(name, role, id, email, school)
                    inquirer.prompt({
                        name: 'confirmAddEmployee',
                        type: 'confirm',
                        message: 'Would you like to add another employee?'
                    }).then(employeeDataObj => {
                        if (employeeDataObj.confirmAddEmployee) {
                            return addEmployee();
                        } else {
                            newEmployeeArr.push(employeeDataObj)
                            return employeeDataObj
                        }

                    })
                })
            }
            if (role === 'Manager') {
            return inquirer.prompt({
                    name: 'officeNumber',
                    type: 'input',
                    message: `What is ${employeeDataObj.name}'s office phone number?`
                }).then(officeNumber => {
                    const employee = new Manager(name, role, id, email, officeNumber)
                    inquirer.prompt({
                        name: 'confirmAddEmployee',
                        type: 'confirm',
                        message: 'Would you like to add another employee?'
                    }).then(employeeDataObj => {
                        if (employeeDataObj.confirmAddEmployee) {
                            return addEmployee();
                        } else {
                            newEmployeeArr.push(employeeDataObj)
                            return employeeDataObj
                        }

                    })
                })
            }
            if (role === 'Engineer') {
            return inquirer.prompt({
                    name: 'github',
                    type: 'input',
                    message: `What is ${employeeDataObj.name}'s GitHub username?`
                }).then(github => {
                    const employee = new Engineer(name, role, id, email, github)
                    inquirer.prompt({
                        name: 'confirmAddEmployee',
                        type: 'confirm',
                        message: 'Would you like to add another employee?'
                    }).then(employeeDataObj => {
                        if (employeeDataObj.confirmAddEmployee) {
                            return addEmployee();
                        } else {
                            newEmployeeArr.push(employeeDataObj)
                            return employeeDataObj
                        }
                    })
                })
            }
        })
}

const generateHTML = function(){
    console.log(newEmployeeArr)
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Our Team Profile</title>
        </head>
        <body>
            TESTING THIS RIGHT NOW
        </body>
    </html>
        `;
    }





// const writeFile = profileHTML => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/index.html', profileHTML, err => {
//             if (err) {
//                 reject(err);
//                 return
//             }
//             resolve({
//                 ok: true,
//                 message: 'File created successfully.'
//             })
//         })
//     })
// };

// const copyFile = () => {
//     return new Promise ((resolve, reject) => {
//         fs.copyFile('./src/style.css','./dist/style.css', err => {
//             if (err) {
//                 reject(err)
//                 return
//             }
//             resolve({
//                 ok: true,
//                 message: 'File copied successfully.'
//             })
//         }
//     )}
// )};

init();