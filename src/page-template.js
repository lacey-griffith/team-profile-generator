

const generateInterns = interns => {
    return `${interns.map(({ name, id, role, email, school  }) => {
          return `
          <div class= "col-2 col-md-3 m-2 bg-dark text-light p-3 flex-column">
            <h2 class= "name text-light">${name}</h3>
            <h6 class= "text-light">ID: ${id}</h5>
            <h6 class= "text-light">Role: ${role}</h4>
            <h6 class= "text-light">Email: ${email}</h5>
            <h6 class= "text-light">School: ${school}</h5>
          </div>
          `;
        })
      .join('')}`
    };
const generateManagers = managers => {
    return `${managers.map(({ name, role, id, email, officeNumber  }) => {
          return `
          <div class= "col-2 col-md-3 m-2 bg-dark text-light p-3 flex-column">
            <h2 class= "text-light">${name}</h3>
            <h6 class= "text-light">ID: ${id}</h5>
            <h6 class= "text-light">Role: ${role}</h4>
            <h6 class= "text-light">Email: ${email}</h5>
            <h6 class= "text-light">Office Number: ${officeNumber}</h5>
          </div>
          `;
        })
        .join('')}`
};
const generateEngineers = engineers => {
    return `${engineers.map(({ name, role, id, email, github  }) => {
          return `
          <div class= "col-2 col-md-3 m-2 bg-dark text-light p-3 flex-column">
            <h2 class= "text-light">${name}</h3>
            <h6 class= "text-light">ID: ${id}</h5>
            <h6 class= "text-light">Role: ${role}</h4>
            <h6 class= "text-light">Email: ${email}</h5>
            <h6 class= "text-light">GitHub username: ${github}</h5>
          </div>
          `;
        })
        .join('')}`
};

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
        if (newEmployeeArr[i].role === "Engineer") {
            engineerArr.push(newEmployeeArr[i])
        }
      }
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset ="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Meet Our Team</title>
            <link rel="stylesheet" href="style.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        </head>
        <body>
        <header class="bg-dark">
          <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark align-center py-2 px-3 text-light">Meet Our Team</h1>
          </div>
        </header>
        <main class="container my-5">
        <div class="row">
        ${generateInterns(internArr)}
        </div>
        <div class="row">
        ${generateManagers(managerArr)}
        </div>
        <div class="row">
        ${generateEngineers(engineerArr)}
        </div>
        </main>
      </body>
      </html>
      `;
    }