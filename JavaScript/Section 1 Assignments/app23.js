var today = new Date();
var day = String(today.getDate()).padStart(2, '0');
var month = String(today.getMonth() + 1).padStart(2, '0');
var year = today.getFullYear();
var nextline = '<br />'

var today1 = month + '-' + day + '-' + year;
var today2 = month + '/' + day + '/' + year;
var today3 = day + '-' + month + '-' + year;
var today4 = day + '/' + month + '/' + year;

var html = `
${today1}
${nextline}
${today2}
${nextline}
${today3}
${nextline}
${today4}
`

document.body.innerHTML = html;