const Employee = require('./Employee')

class Intern extends Employee {
    constructor(school) {
        super();

        this.school = school;
        this.role = 'Intern'
    }
    getSchool() {
        return toString(this.school)
    }
}

module.exports = Intern;