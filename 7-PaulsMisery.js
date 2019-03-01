/*
https://www.codewars.com/kata/pauls-misery

Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee
but would also like to lead a normal life, with other activities. But he just can't stop
solving all the kata!!
Given an array (x) you need to calculate the Paul Misery Score. The values are worth the
following points:
kata = 5 Petes kata = 10 life = 0 eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as
follows:
<40 = 'Super happy!'
<70 >=40 = 'Happy!'
<100 >=70 = 'Sad!'
>=100 = 'Miserable!'

Пол - отличный кодер и занимает высокое место в таблице лидеров CW. Он решает ката, как Банши,
но также хотели бы вести нормальную жизнь, с другими видами деятельности. Но он просто не может
перестать решать все ката!!

Учитывая массив (x), вам нужно вычислить счет Paul Misery. Значения стоят следующих пунктов:
kata = 5 Petes kata = 10 life = 0 eating = 1
Оценка несчастья-это общее количество очков, полученных из массива. После того, как у вас есть
общая, вернуться следующим образом:

<40 = 'Super happy!'
<70 >=40 = 'Happy!'
<100 >=70 = 'Sad!'
>=100 = 'Miserable!'
*/

function paul(x){
    let n = x.filter(el => el === 'Petes kata').length * 10 + x.filter(el => el === 'kata').length * 5 + x.filter(el => el === 'eating').length * 1;
    if (n < 40) return 'Super happy!';
    if (n >= 40 && n < 70) return 'Happy!';
    if (n >= 70 && n < 100) return 'Sad!';
    if (n >= 100) return 'Miserable!';
}

/* Tests */
console.log(paul(['life', 'eating', 'life'])); //'Super happy!'
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating'])); //'Super happy!'
console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating'])) //'Happy!'

/* ********************************************************************************
--------------------------
paul = x => {
  const score = x.map(x => ({ kata: 5, 'Petes kata': 10, life: 0, eating: 1 }[x])).reduce((p,c) => p+c)
  return score < 40 ? 'Super happy!' : score < 70 ? 'Happy!' : score < 100 ? 'Sad!' : 'Miserable!'
}

--------------------------
paul=x=>(v=x.reduce((s,a)=>s+[5,10,0,1][["kata","Petes kata","life","eating"].indexOf(a)],0))<40?"Super happy!":v<70?"Happy!":v<100?"Sad!":"Miserable AND NEARLY DEAD:-(!!!".slice(0,9)+"!"

--------------------------
function paul(x){
  arr = x.map(a => a.replace(/eating/, 1)
                     .replace(/life/, 0)
                     .replace(/Petes kata/, 10)
                     .replace(/kata/, 5))

  n = arr.map(a => parseInt(a)).reduce(function(a, b) {return a + b;}, 0);

  return n < 40 ? 'Super happy!' :
         n < 70 ? 'Happy!' :
         n < 100 ? 'Sad!' :
          'Miserable!'
}

*/