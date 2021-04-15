class Employee {
    constructor(name, role, id) {
        this.name = name
        this.role = role
        this.id = id
        //this.email = email
    }
    getName(name) {
        return `${this.name}`
    }
    getRole(role) {
        return `${this.name} is a(n) ${this.role}.`
    }
    getID(id) {
        return `${this.name}'s id is ${this.id}`
    }
}




module.exports = Employee