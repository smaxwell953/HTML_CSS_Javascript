class Contact { // ES6 classes
    constructor(type, name, lastName, number) {
        this.type = type;
        this.name = name;
        this.lastName = lastName;
        this.number = number;
    }
}

const bob = new Contact('Customer', 'Bob', 'Sample', '999-555-5555');

document.write('Lab 5.1');
document.write('<br/>');
document.write('Contact Type: ', bob.type);
document.write('<br/>');
document.write('Name: ', bob.name);
document.write('<br/>');
document.write('Last Name: ', bob.lastName);
document.write('<br/>');
document.write('Phone: ', bob.number);