var a = 49;
var b = 7;
var nextline = '<br />'

var addval = a + b;
var subval = a - b;
var divval = a / b;
var modval = a % b;

var html = `
${'a = ' + a}
${nextline}
${'b = ' + b}
${nextline}
${nextline}
${'a + b = ' + addval}
${nextline}
${'a - b = ' + subval}
${nextline}
${'a / b = ' + divval}
${nextline}
${'a % b = ' + modval}
`;

document.body.innerHTML = html;