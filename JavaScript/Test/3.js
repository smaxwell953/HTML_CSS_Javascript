var triangle = function(height, length){
    area = (height * length)/2;
    return (`Length of the base: ${length}<br/>
            Height of the triangle: ${height}<br/>
            Area of the triangle: ` + area);
}

document.write(triangle(3, 4));