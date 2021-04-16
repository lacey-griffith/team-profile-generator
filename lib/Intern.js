const TeamMember = require('./TeamMembers.js')

function Intern(name, role, id, email, school) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.school = school;
    }

Intern.prototype = Object.create(TeamMember.prototype)

Intern.prototype.getSchool = function() {
    return toString(this.school)
}

module.exports = Intern;