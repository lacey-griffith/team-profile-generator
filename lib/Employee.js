class Employee {
    constructor(name, role, id) {
        this.name = name;
        this.role = role;
        this.id = id;
        //this.email = email;
    }
    getName() {
        return this.name;
    }
    getRole() {
        return toString(this.role);
    }
    getId() {
        return Number(this.id);
    }
    getEmail() {
        return toString(this.email)
    }
}


module.exports = Employee