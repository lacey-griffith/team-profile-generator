class Engineer {
    constructor(name, role, id, email, github) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.github = github
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
    getGitHub() {
        return toString(this.github)
    }
}


module.exports = Engineer;