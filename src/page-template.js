const { writeFile } = require("../utils/generate-site");

const generateInterns = interns => {
    console.log(interns)
    return `${interns
        .map(({ name, id, role, email, school  }) => {
          return `
          <div class = "col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class = "text-light">${name}</h3>
            <h5>ID:${id}</h5>
            <h4>Role:${role}</h4>
            <h5>Email:${email}</h5>
            <h5>School:${school}</h5>
          </div>
          `;
        })
}
`;}
const generateManagers = managers => {
    console.log(managers)
    return `${managers
        .map(({ name, role, id, email, officeNumber  }) => {
          return `
          <div class = "col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class = "text-light">${name}</h3>
            <h5>ID:${id}</h5>
            <h4>Role:${role}</h4>
            <h5>Email:${email}</h5>
            <h5>Office Number:${officeNumber}</h5>
          </div>
          `;
        })
}
`;}
const generateEngineers = engineers => {
    console.log(engineers)
    return `${engineers
        .map(({ name, role, id, email, github  }) => {
          return `
          <div class = "col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class = "text-light">${name}</h3>
            <h5>ID:${id}</h5>
            <h4>Role:${role}</h4>
            <h5>Email:${email}</h5>
            <h5>GitHub username:${github}</h5>
          </div>
          `;
        })
}
`;}

module.exports = newEmployeeArr => {
    let internArr = [];
    let managerArr = [];
    let engineerArr = [];
    for (let i = 0; i < newEmployeeArr.length; i++) {
        if (newEmployeeArr[i].role === "Intern") {
            internArr.push(newEmployeeArr[i])
        }
        if (newEmployeeArr[i].role === "Manager") {
            managerArr.push(newEmployeeArr[i])
            }
        if (newEmployeeArr[i].role === "Engineer")
            engineerArr.push(newEmployeeArr[i])
        }
    console.log(internArr)
    console.log(managerArr)
    console.log(engineerArr)
        
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset ="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Meet Our Team</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
        <header>
          <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark align-center py-2 px-3">Meet Our Team</h1>
          </div>
        </header>
        <main class="container my-5">
        ${generateInterns(internArr)}
        ${generateManagers(managerArr)}
        ${generateEngineers(engineerArr)}
        </main>
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