const reverseString = function(elestring) {
    let largodelapalabra = elestring.length;
    let palabrafinal = "";
    if(elestring == ''){
        return '';
    }else{
        while(largodelapalabra>=0){
            palabrafinal = palabrafinal.concat(elestring.charAt(largodelapalabra));
            largodelapalabra--;
        }
        return palabrafinal;
    }
    
};
// console.log(reverseString("hola"));
// Do not edit below this line
module.exports = reverseString;
