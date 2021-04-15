function Employee(name, role, id) {
    this.name = name;
    this.role = role;
    this.id = id;
    //this.email = email;
};

Employee.prototype.getName = function() {
    return this.name
};

Employee.prototype.getRole = function(role) {
    return {
        role: this.role
    }
};

Employee.prototype.getID = function(id) {
    return {
        id: this.id
    }
}

module.exports = Employee;