//OVO JE FUNKCIJA KADA ZELIMO DA SABEREMO DVA BROJA

// function saberi(a,b) {
//     return a + b;
// }

// const zbir = saberi(2, 2);






// SADA ZELIMO DA ODRADIMO OVO ISTO ALI PREKO ARROW FUNKCIJE

// const sum = (a, b) => a + b;
// console.log(sum(5,10));








//ZELIMO DA ISPISEMO IME DA NAM VRATI VELIKIM SLOVIMA ISPISANO

// const velikoIme = (ime) => ime.toUpperCase();
// console.log(velikoIme("zein"))








//ZELIMO DA NAPRAVIMO MAP METODU DA DOBIJEMO KVADRAT BROJEVA PREKO ARROW FUNKCIJE

// const numbers = [2, 4, 6, 8, 10]
// const squared = numbers.map(num => num * num);







//ZELIMO DA OKRENEMO TEKST PREKO ARROW FUNKCIJE

// const reverseText = text => text.split("").reverse().join("")
// console.log(reverseText("zein"));







//ZELIMO DA ISPISEMO FILTER METODU DA IZABEREMO SVE PARNE BROJEVE PREKO ARROW FUNKCIJE

// const numbers = [2, 5, 7, 8 , 10 , 11, 14];
// const even = numbers.filter( (num) => num % 2 === 0)

// console.log(even);








//AKO JE CENA VECA OD 1000 DAJEMO POPUST 20 %, AKO NIJE ONDA DAJEMO 10 % POPUSTA

// const price = +prompt("Unesite cenu artikla");
// const discount = price > 1000 ? 0.2 : 0.1;                   //ovo nam znaci - uslov ? ispunjen : neispunjen

// console.log(discount);

















// DOMACI - PRIMER ZA MAP 

// const nums = [2,10,15,20];
// const dupliBrojevi = nums.map(num => {
//     if(num > 10) {
//         return num * 2;
//     }
// })


// console.log(dupliBrojevi);






// //DOMACI - PRIMER ZA FILTER 

// const people = [
//     {ime: "osman", godine: 28},
//     {ime: "alen", godine: 1},
//     {ime: "semir", godine: 3},
//     {ime: "omer", godine: 11},
//     {ime: "dzemil", godine: 19},

// ]

// const toddlers = people.filter(person => person.age <= 3)

// console.log(toddlers);









// // DOMACI - PRIMER ZA REDUCE 


// const numbers = [2,3,4];

// const product = numbers.reduce((total, current) => {
//     return total * current;
// }, 1);