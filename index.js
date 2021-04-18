const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const pageTemplate = require('./src/page-template.js');
const {writeFile, copyFile} = require('./utils/generate-site.js');

const newEmployeeArr = [];

const addEmployee = () => {
    console.log('=== === ===')
    console.log('Team Profile Builder')
    console.log('=== === ===')
    return inquirer.prompt([
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
};

// const checkRole = employeeDataObj => {
//         const {name, id, email, role} = employeeDataObj
        
//         if(role === 'Intern') {
//             return addIntern(employeeDataObj)
//         }
//         if(role === 'Manager') {
//             return addManager(employeeDataObj)
//         }
//         if(role === 'Engineer') {
//             return  addEngineer(employeeDataObj)
//         }
// }

const addIntern = employeeDataObj => {
    inquirer.prompt({
        name: 'school',
        type: 'input',
        message: `Which school did ${employeeDataObj.name} attend?`
    }).then(school => {
        employeeDataObj.school = school
        
        inquirer.prompt({
            name: 'confirmAddEmployee',
            type: 'confirm',
            message: 'Would you like to add another employee?',
        })
        .then(employeeDataObj => {
            if(employeeDataObj.confirmAddEmployee) {
                return addEmployee(employeeDataObj);
            } else {
                newEmployeeArr.push(employeeDataObj)
                //console.log(newEmployeeArr)
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
        
        inquirer.prompt({
            name: 'confirmAddEmployee',
            type: 'confirm',
            message: 'Would you like to add another employee?',
        })
        .then(employeeDataObj => {
            if(employeeDataObj.confirmAddEmployee) {
                return addEmployee(employeeDataObj);
            } else {
                newEmployeeArr.push(employeeDataObj)
                //console.log(newEmployeeArr)
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
        
        inquirer.prompt({
            name: 'confirmAddEmployee',
            type: 'confirm',
            message: 'Would you like to add another employee?',
        })
        .then(employeeDataObj => {
            if(employeeDataObj.confirmAddEmployee) {
                console.log(employeeDataObj, 'line 136')
                return addEmployee(employeeDataObj);
            } else {
                // console.log(newEmployeeArr)
                return employeeDataObj
            }
        })
    })
}

addEmployee()
.then(employeeDataObj => {
    const {name, id, email, role} = employeeDataObj
    if(role === 'Intern') {
       return addIntern(employeeDataObj)
    }
    if(role === 'Manager') {
        //if manager is selected, user is returned 
       return addManager(employeeDataObj)
    }
    if(role === 'Engineer') {
        //if engineer is selected, github prompts then employeedataobj is undefined before option to answer
       return addEngineer(employeeDataObj)
    }
})
.then(newEmployeeArr => {
    //below console log gives undefined 
    console.log(employeeDataObj,'line 160')
    //console.log(newEmployeeArr, 'line 162 index')
    // newEmployeeArr is undefined here
    return pageTemplate(newEmployeeArr)
})
// .then(profileHTML => {
//     return writeFile(profileHTML)
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse)
//     return copyFile();
// })
.then(copyFileResponse => {
    console.log(copyFileResponse)
})
.catch(err => {
    console.log(err)
})
