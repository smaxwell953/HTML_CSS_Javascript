class Member {
    constructor(party, type, firstName, lastName, dob, place) {
        this.party = party;
        this.type = type;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
        this.place = place;
    }
}

// Calculate age
Member.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name - prototype method
Member.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

const romney = new Member('Republican', 'Senator', 'Mitt', 'Romney', '03-12-1947', 'Utah');
const lee = new Member('Republican', 'Senator', 'Mike', 'Lee', '06-04-1971', 'Utah');
const bishop = new Member('Republican', 'Representative', 'Rob', 'Bishop', '07-13-1951', 'Utah\'s 1st congressional district');
const stewart = new Member('Republican', 'Representative', 'Chris', 'Stewart', '07-15-1960', 'Utah\'s 2nd congressional district');
const curtis = new Member('Republican', 'Representative', 'John', 'Curtis', '05-10-1960', 'Utah\'s 3rd congressional district');
const mcadams = new Member('Democratic', 'Representative', 'Ben', 'McAdams', '12-05-1974', 'Utah\'s 4th congressional district');

document.write(romney.party, ' ', romney.type, ' ', romney.getFullName(), ', ', romney.calculateAge(), ', of ', romney.place);
document.write('<br/>');
document.write(lee.party, ' ', lee.type, ' ', lee.getFullName(), ', ', lee.calculateAge(), ', of ', lee.place);
document.write('<br/>');
document.write(bishop.party, ' ', bishop.type, ' ', bishop.getFullName(), ', ', bishop.calculateAge(), ', of ', bishop.place);
document.write('<br/>');
document.write(stewart.party, ' ', stewart.type, ' ', stewart.getFullName(), ', ', stewart.calculateAge(), ', of ', stewart.place);
document.write('<br/>');
document.write(curtis.party, ' ', curtis.type, ' ', curtis.getFullName(), ', ', curtis.calculateAge(), ', of ', curtis.place);
document.write('<br/>');
document.write(mcadams.party, ' ', mcadams.type, ' ', mcadams.getFullName(), ', ', mcadams.calculateAge(), ', of ', mcadams.place);