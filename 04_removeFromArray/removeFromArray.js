const removeFromArray = function(elarray, ...argumentos) {
    for(let i = 0; i<= argumentos.length; i++){
        for(let j = 0; j<= elarray.length; j++){
            if(elarray[j] == argumentos[i]){
                if((typeof elarray[j]) == (typeof argumentos[i])){
                    elarray.splice(j,1);
                }
                
            }
        }
    }
    return elarray;
};
//removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
