class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.role = 'Employee'
        this.id = id;
        this.email = email;
    }
    getName() {
        return `The team member's name is ${toString(this.name)}`
    }

    getRole() {
        return `The team member's role is ${toString(this.role)}`
    }

    getId = function () {
        return Number(this.id)
    }

    getEmail = function () {
        return `The team member's email is ${toString(this.email)}`
    }
}

module.exports = Employee;