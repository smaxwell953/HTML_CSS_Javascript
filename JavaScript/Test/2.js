var time = function(hours, minutes){
    hoursec = hours * 3600;
    minsec = minutes * 60;
    sumsec = hoursec + minsec;
    return (`${hours} hours and ${minutes} minutes equals to ` + sumsec + ` seconds.`);
}

document.write(time(2, 10));