const inquirer = require('inquirer');
const fs = require('fs');

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
        school = Object.values(school)
        this.school = school[0]

        const intern = new Intern(name, id, email, school[0])
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
        officeNumber = Object.values(officeNumber)
        this.officeNumber = officeNumber[0]

        const manager = new Manager(name, id, email, officeNumber[0])
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
        github = Object.values(github)
        this.github = github[0]

        const engineer = new Engineer(name, id, email, github[0])
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

const generateHTML = (newEmployeeArr) => {
    console.log(newEmployeeArr, 'line 140')
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
// get newEmployeeArr
// loop through to display each employee on the HTML page
// use .map and .filter to put interns, managers and engineers together
// write to an index.html file in the dist folder
// add to the css style sheet (template from previous lesson?, bootstrap?)
// copy the css stylesheet to the dist folder (link within html!)





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