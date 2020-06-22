var arith = function(a, b){
    sumval = a + b;
    diffval = a - b;
    prodval = a * b;
    quotval = a / b;

    return (`${a} + ${b} = ` + sumval + `<br/>` + 
            `${a} - ${b} = ` + diffval + `<br/>` + 
            `${a} * ${b} = ` + prodval + `<br/>` + 
            `${a} / ${b} = ` + quotval.toFixed(2)
            );
}

document.write(arith(5, 3));