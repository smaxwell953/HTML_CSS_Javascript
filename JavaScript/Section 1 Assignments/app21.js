var name = 'Sara' + ' ' + 'Maxwell';

var today = new Date();
var day = String(today.getDate()).padStart(2, '0');
var month = String(today.getMonth() + 1).padStart(2, '0');
var year = today.getFullYear();

var today = month + '/' + day + '/' + year;

html = `
${'JS Lab 2.1'}<br>
${name}<br>
${today}
`;

document.body.innerHTML = html;