
class Employee {
    constructor(name, id, role, email) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }
    getName() {
        return `The team member's name is ${toString(this.name)}`
    }

    getRole() {
        return `The team member's role is ${toString(this.role)}`
    }

    getId() {
        return Number(this.id)
    }

    getEmail() {
        return `The team member's email is ${toString(this.email)}`
    }
}

module.exports = Employee;