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
        return this.role;;
    }
    getID() {
        return this.id;
    }
}


module.exports = Employee