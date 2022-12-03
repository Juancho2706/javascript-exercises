const sumAll = function(undato, otrodato) {
    if(undato < 0 || otrodato < 0){
        return 'ERROR';
    }else if((typeof undato) == 'number' && (typeof otrodato) == 'number'){
        if(undato<otrodato){
            return lasuma(undato,otrodato);
        }else{
            return lasuma(otrodato,undato);
        }
    }else{
        return 'ERROR';
    }
};
function lasuma(a,b){
    let total = 0;
    for(let i = a; i <= b; i++){
        total += i;
    }
    return total;
}
// Do not edit below this line
module.exports = sumAll;
