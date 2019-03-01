/*
https://www.codewars.com/kata/narcissistic-numbers?utm_source=newsletter

A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.
Ex: 153, where n = 3 (number of digits in 153)
1встепени3 + 5встепени3 + 3встепени3 = 153
Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

Нарциссическое число-это число длины n, в котором сумма его цифр в степени n равна исходному числу. Если это кажется непонятным, обратитесь к приведенному ниже примеру.

Пример: 153, где n = 3 (количество цифр в 153)
1встепени3 + 5встепени3 + 3встепени3 = 153

Написать метод is_narcissistic(num), который возвращает, является ли num Нарциссическим числом.

*/

let isNarcissistic = n => n === (('' + n).split('').reduce((a, b, i, arr) => +a + Math.pow(+b, arr.length), 0));


/* Tests */
console.log(isNarcissistic(24678050)); //true
console.log(isNarcissistic(88593477)); //true
console.log(isNarcissistic(11513221922401)); //false

/* ********************************************************************************
--------------------------
// no strings!

function isNarcissistic(n) {
  const exp = Math.floor(Math.log10(n) + 1);
  let sum = 0;

  for (let i = 0; i < exp; i++) {
    let digit = Math.floor(n / Math.pow(10, i)) % 10;
    sum += Math.pow(digit, exp);
  }

  return sum === n;
}

--------------------------
const isNarcissistic = n => n === [...`${n}`].map(Number).reduce((s,i)=>s+i**`${n}`.length,0);

--------------------------
const isNarcissistic = n => n.toString().split``.reduce((r, e) => r + e ** n.toString().length, 0) === n;

*/