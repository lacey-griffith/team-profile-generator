function TeamMember() {
}

TeamMember.prototype.getName = function() {
        return `The team member's name is ${this.name}`
}

TeamMember.prototype.getRole = function() {
        return `The team member's role is ${toString(this.role)}`
}

TeamMember.prototype.getId = function() {
        return Number(this.id)
}

TeamMember.prototype.getEmail= function() {
        return `The team member's email is ${toString(this.email)}`
}

module.exports = TeamMember;