
function Employee(name = '', role = '') {
    this.name = name;
    this.id = 1;
    //this.email = '';
    this.role = role;
}
Employee.prototype.getName = function() {
    return {
        name: this.name
    }
};

Employee.prototype.getRole = function() {
    return {
        role: this.role
    }
};
module.exports = Employee;