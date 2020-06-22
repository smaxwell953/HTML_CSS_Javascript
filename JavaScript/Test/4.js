var diveven = function(a, b){
    if (a % b == 0) {
        return (`${a} divided by ${b} divides evenly.`);
    } else {
        return (`${a} divided by ${b} does not divide evenly.`);
    }
}

document.write(diveven(4, 8));