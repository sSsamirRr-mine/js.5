'use strict';

let num1 = +prompt('num1');
let num2 = +prompt('num2');
let amal = prompt('amal');
let result = null

if (amal == '+') {
    result = num1 + num2
} else if (amal == '-') {
    result = num1 - num2
} else if (amal == '/') {
    result = num1 / num2
} else if (amal == '*') {
    result = num1 * num2
} else {
    result = ('Bu amall emas! 👿')
}

console.log(result);

alert(`resultat: ${num1} ${amal} ${num2} = ${result}`)
