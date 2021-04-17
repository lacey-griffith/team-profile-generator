const Employee = require('./Employee')

class Manager extends Employee {
        constructor(officeNumber) {
                super(name);

                this.officeNumber = officeNumber
                this.role = 'Manager'
        }
        getOfficeNumber() {
                return Number(this.officeNumber)
        }
}


module.exports = Manager;