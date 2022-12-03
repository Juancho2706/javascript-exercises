const palindromes = function (palabra) {
    let palabralreves = '';
    //Replace se usa para remplazar todos esos simbolos con un ''
    let palabrasincosas = palabra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    palabrasincosas = palabrasincosas.toLowerCase();
    palabrasincosas = palabrasincosas.replace(/\s/g, '');
    for(let i = (palabrasincosas.length - 1); i>=0; i--){
        palabralreves += palabrasincosas[i];
    }
    palabralreves = palabralreves.toLowerCase();
    if(palabrasincosas == palabralreves){
        return true;
    }else{
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
