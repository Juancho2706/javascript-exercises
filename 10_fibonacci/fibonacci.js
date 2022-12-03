const fibonacci = function(valor) {
    let valorconversion = +valor;
    if(valorconversion < 0){
        return "OOPS";
    }else{
        let primero = 0, segundo = 1, total = valorconversion;
        for(let i = 2; i <=valorconversion; i++){
            total = primero + segundo;
            primero = segundo;
            segundo = total;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = fibonacci;
