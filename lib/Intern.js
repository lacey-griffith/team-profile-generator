class Intern {
    constructor(name, role, id, email, school) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.school = school;
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
    getSchool() {
        return toString(this.school)
    }
}

module.exports = Intern;