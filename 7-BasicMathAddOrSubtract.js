/*
In this kata, you will do addition and subtraction on a given string.
The return value must be a 'string'.

Example: calculate('1plus2plus3minus4') should return '2'.

В этом ката, вы будете делать сложение и вычитание на заданной строке.
Возвращаемое значение должно быть 'string'.

Пример: calculate ('1plus2plus3minus4') должен вернуть'2'.

*/

function calculate(str) {
    let arr = str.replace(/plus/gi, '|+|').replace(/minus/gi, '|-|').split('|');
    let s = +arr[0];

    for(let i = 1; i < arr.length - 1; i++) {
        s = (arr[i] === '+') ? s += +arr[i+1] : (arr[i] === '-') ? s -= +arr[i+1] : s += 0;
    }
    return ''+s;
}

console.log(calculate('1plus2plus3minus4'));
console.log(calculate('1plus2plus3plus4'));

/* ********************************************************************************
--------------------------
function calculate(str) {
  s = str.replace(/(plus)/g, '+').replace(/(minus)/g, '-')
  return eval(s).toString()
}

--------------------------
function calculate(str) {
  return String(eval(str.replace(/plus|minus/g, re => re === 'plus' ? '+' : '-')))
}

--------------------------
let calculate = _ =>
  (_ => `${_}`)(_
    .split(/(plus|minus)/)
    .reduce(($,_) => _ == 'plus' ? [$[0], 1] : _ == 'minus' ? [$[0], -1] : [$[0] + $[1] * _, $[1]], [0, 1])
    [0]);

*/