class LivingFormerMember {
    constructor(party, type, firstName, lastName, dob, place, begin, end) {
        this.party = party;
        this.type = type;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
        this.place = place;
        this.begin = new Date(begin);
        this.end = new Date(end);
    }
}

// Calculate age
LivingFormerMember.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name - prototype method
LivingFormerMember.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Calculate years of service
LivingFormerMember.prototype.calculateServiceYears = function(){
    const diffserv = this.end.getTime() - this.begin.getTime();
    const serviceDate = new Date(diffserv);
    return Math.abs(serviceDate.getUTCFullYear() - 1970);
}

// Calculate months of service
LivingFormerMember.prototype.calculateServiceMonths = function(){
    const diffserv = this.end.getTime() - this.begin.getTime();
    const serviceDate = new Date(diffserv);
    return Math.abs(serviceDate.getMonth());
}

// Calculate days of service
LivingFormerMember.prototype.calculateServiceDays = function(){
    const diffserv = this.end.getTime() - this.begin.getTime();
    const serviceDate = new Date(diffserv);
    return Math.abs(serviceDate.getDate());
}

const hatch = new LivingFormerMember('Republican', 'Senator', 'Orrin', 'Hatch', '03-22-1934', 'Utah', '01-03-1977',  '01-03-2019');
document.write(hatch.party, ' ', hatch.type, ' ', hatch.getFullName(), ', ', hatch.calculateAge(), ', of ', hatch.place, ' from ', hatch.begin, ' to ', hatch.end, ' or ', hatch.calculateServiceYears(), ' years, ', hatch.calculateServiceMonths(), ' months, and ', hatch.calculateServiceDays(), ' days.');