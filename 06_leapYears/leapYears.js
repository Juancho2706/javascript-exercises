const leapYears = function(elano) {
    if(((elano % 100) != 0) || ((elano % 400) == 0)){
        if(((elano % 4) == 0) || ((elano % 400) == 0)){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
