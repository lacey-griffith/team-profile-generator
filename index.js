const inquirer = require('inquirer');
const fs = require('fs');

const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')

const generateHTML = require('./src/page-template')
//const generateProfile = require('/utils/generate-site')

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
                const verify = idInput.match (
                    /^[0-9]\d*$/
                )
                if (verify) {
                    return true
                } else {
                    console.log(`\nEnter a valid ID.`)
                    return false
                }
            }
        }, {
            name: 'email',
            type: 'input',
            message: 'Email address: ',
            validate: emailInput => {
                const verify = emailInput.match(
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
                );
                if (verify) {
                    return true
                } else {
                    console.log(`\nEnter a valid email address.`)
                    return false
                }
            }
        }, {
            name: 'role',
            type: 'list',
            message: 'Which role is this employee?',
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
                addIntern(name,id, email);
            }
            else if (role === 'Manager') {
                addManager(name,id, email);
            }
            else if (role === 'Engineer') {
                addEngineer(name,id, email);
            }
            else {
                return console.error(err);
            }
        })
}

const addIntern = (name,id, email) => {
    return inquirer.prompt({
        name: 'school',
        type: 'input',
        message: `Which school did ${name} attend?`
    }).then(school => {
        school = school.school
        this.school = school

        const intern = new Intern(name, id, email, school)
        newEmployeeArr.push(intern)

            inquirer.prompt({
            name: 'confirmAddEmployee',
            type: 'confirm',
            message: 'Would you like to add another employee?',
            default: false
        }).then(confirmAdd => {
            confirmAdd.value = Object.values(confirmAdd)
            if (confirmAdd.value[0] === true) {
                return addEmployee();
            } else {
                return generateHTML(newEmployeeArr)
            }

        })
    })
}

const addManager = (name, id, email) => {
    return inquirer.prompt({
        name: 'officeNumber',
        type: 'input',
        message: `What is ${name}'s office phone number?`
    }).then(officeNumber => {
        officeNumber = officeNumber.officeNumber
        this.officeNumber = officeNumber

        const manager = new Manager(name, id, email, officeNumber)
        newEmployeeArr.push(manager)

            inquirer.prompt({
            name: 'confirmAddEmployee',
            type: 'confirm',
            message: 'Would you like to add another employee?',
            default: false
        }).then(confirmAdd => {
            confirmAdd.value = Object.values(confirmAdd)
            if (confirmAdd.value[0] === true) {
                return addEmployee();
            } else {
                return generateHTML(newEmployeeArr)
            }

        })
    })
}

const addEngineer = (name, id, email) => {
    return inquirer.prompt({
        name: 'github',
        type: 'input',
        message: `What is ${name}'s GitHub username?`
    }).then(github => {
        github = github.github
        this.github = github

        const engineer = new Engineer(name, id, email, github)
        newEmployeeArr.push(engineer)

            inquirer.prompt({
            name: 'confirmAddEmployee',
            type: 'confirm',
            message: 'Would you like to add another employee?',
            default: false
        }).then(confirmAdd => {
            confirmAdd.value = Object.values(confirmAdd)
            if (confirmAdd.value[0] === true) {
                return addEmployee();
            } else {
                return generateHTML(newEmployeeArr)
            }
        })
    })
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