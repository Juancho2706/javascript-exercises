const repeatString = function(palabra,veces) {
    let palabracompleta = "";
    if(veces < 0){
        return 'ERROR';
    }else{
        for(i = 0; i < veces; i++){
          palabracompleta = palabracompleta+palabra;
        }
        return palabracompleta;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
