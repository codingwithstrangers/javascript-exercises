const leapYears = function(year) {
    // if it can be divided by 4,100 and 400 it is true
    //you need modulo %
    //modulo checks for remainders 
    if (year%4 === 0 && year%100 != 0 || year%400 ===0 ){
        return true
    } else{
        return false
    }
    //if not true return false

};

// Do not edit below this line
module.exports = leapYears;
