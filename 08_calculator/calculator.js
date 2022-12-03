const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function(sumarray) {
  let sumatotal = 0;
	for(let i = 0; i < sumarray.length; i++){
    sumatotal += sumarray[i];
  }
  return sumatotal;
};

const multiply = function(mularray) {
  let multotal = mularray[0];
	for(let i = 1; i < mularray.length; i++){
    multotal *= mularray[i];
  }
  return multotal;
};

const power = function() {
  let sumpow = 1;
	for(let i = 0; i < arguments[1]; i++){
    sumpow = sumpow * arguments[0];
  }
  return sumpow;
};

const factorial = function() {
  if(arguments[0] == 0){
    return 1;
  }else{
    let elfactorial = 1;
    for(let i = 1; i <= arguments[0]; i++){
      elfactorial *= i;
    }
    return elfactorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
