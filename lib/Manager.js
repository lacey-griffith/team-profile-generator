class Manager {
    constructor(name, role, id, email, officeNumber) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber
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
    getOfficeNumber() {
        return Number(this.officeNumber)
    }
}


module.exports = Manager;