const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const sara = Object.create(personPrototypes, {
    firstName: {value: 'Sara'},
    lastName: {value: 'Maxwell'},
    age: {value: 36}
});

console.log(sara)

console.log(sara.greeting());