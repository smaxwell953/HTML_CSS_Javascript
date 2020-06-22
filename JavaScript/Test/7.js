var initlast = function(lastName){
    lastinit = lastName.charAt('0');
    return (`"${lastName}" will return "` + lastinit + `".`);
}

document.write(initlast('Smith'));