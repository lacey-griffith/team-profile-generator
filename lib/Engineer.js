const TeamMember = require('./TeamMembers.js')

function Engineer(name, role, id, email, github) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.github = github
    }

Engineer.prototype = Object.create(TeamMember.prototype)

Engineer.prototype.getGitHub = function() {
    return toString(this.github)
}


module.exports = Engineer;