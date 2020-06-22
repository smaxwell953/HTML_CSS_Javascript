class LateFormerMember {
    constructor(party, type, firstName, lastName, dob, dod, place, begin, end) {
        this.party = party;
        this.type = type;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
        this.deathdate = new Date(dod);
        this.place = place;
        this.begin = new Date(begin);
        this.end = new Date(end);
    }
}

// Calculate age
LateFormerMember.prototype.calculateAge = function(){
    const diff = this.deathdate.getTime() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name - prototype method
LateFormerMember.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Calculate years of service
LateFormerMember.prototype.calculateServiceYears = function(){
    const diffserv = this.end.getTime() - this.begin.getTime();
    const serviceDate = new Date(diffserv);
    return Math.abs(serviceDate.getUTCFullYear() - 1970);
}

const bennett = new LateFormerMember('Republican', 'Senator', 'Bob', 'Bennett', '09-18-1933', '05-04-2016', 'Utah', '01-03-1993', '01-03-2011');

document.write(bennett.type, ' ', bennett.getFullName(), ', ', bennett.calculateAge(), ', a ', bennett.party, ' from ', bennett.place, ', was born ', bennett.birthday, ' and died ', bennett.deathdate, ' having served from ', bennett.begin, ' until ', bennett.end, ' or ', bennett.calculateServiceYears(), ' years.');