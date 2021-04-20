
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.role = role;
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