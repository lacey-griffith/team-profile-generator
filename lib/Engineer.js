const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, role, id, email, github) {
        super(name, id, email);
        this.github = github
    }
    getRole() {
        return 'Engineer'
    }
    getGitHub() {
        return toString(this.github)
    }
}


module.exports = Engineer;