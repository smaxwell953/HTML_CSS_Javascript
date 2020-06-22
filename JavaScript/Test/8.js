var initlast = function(sentence){
    firstword = sentence.split(' ');
    return (`"` + firstword[0] + `"`);
}

document.write(initlast('Lorem Ipsum is simply dummy text of the printing and typesetting industry.'));