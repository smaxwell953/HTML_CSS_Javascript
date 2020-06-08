function greeting(name){
    return 'Hello, ' + name;
}

document.write(greeting('Sara'));
document.write('<br/>');

const addus = function(a, b){
    sumval = a + b;
    return (`${a} + ${b} = ` + sumval);
}

document.write(addus(3, 5));