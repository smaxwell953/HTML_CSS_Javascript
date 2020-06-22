// Person constructor
function Person(name, dob) {
    this.name = name;
    //this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// const sara = new Person('Sara', 36);
// const amy = new Person('Amy', 30);

// console.log(john.age);

const sara = new Person('Sara', '2-20-1983');
console.log(sara.calculateAge());