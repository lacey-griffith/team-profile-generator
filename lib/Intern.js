const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, role, id, email, school) {
        super(name, id, email);
        this.role = 'Intern';
        this.school = school;
    }
    getRole() {
        return 'Intern'
    }
    getSchool() {
        return toString(this.school)
    }
}

module.exports = Intern;