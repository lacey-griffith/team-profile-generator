const TeamMember = require("./TeamMembers");

function Employee(name, role, id, email) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }

Employee.prototype = Object.create(TeamMember.prototype)


module.exports = Employee