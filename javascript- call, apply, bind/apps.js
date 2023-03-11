//CALL -----------------------------

// let obj = {food: "Pizza"};

// function favFood (text,rating) {
//     return `${this.food} ${text} ${rating}`;

// }

// console.log(favFood.call(obj, "je odlicna", 10));



// let person = {
//     name: "Demir",
//     age: 20,
// };

// function sayHello() {
//     return `Hello, ${this.name}, how was your day?`;
// }

// console.log(sayHello.call(person));




//APPLY ------------------------


// let obj = {
//     add: function (a, b, c) {
//         return a + b + c;
//     },
// };

// function sumItUp(a, b, c) {
//     return this.add(a, b, c);
// }

// console.log(sumItUp.apply(obj, [5, 5, 5]))








// function greet () {
//     console.log(this.animal, "typically sleep between", this.sleepDuration);

// }


// const obj = {
//     animal: "cats",
//     sleepDuration: "12 and 16 hours"
// }

// greet.apply(obj);





//BIND -----------------------------


// let rectangle = {
//     getArea: function (a, b) {
//         return a * b;
//     },
// }

// function calcArea(a,b) {
//     return this.getArea(a, b);
// }

// const bindedFunction = calcArea.bind(rectangle);

// console.log(bindedFunction(50,20));











//DOMACI 
//po 3 primera za call, apply, bind


//PRIMERI ZA CALL


// const person = {
//     name: "Demir",
//     country: function(origin) {
//       console.log(`I am from ${origin}, and my name is ${this.name}`);
//     }
//   };
  
// person.country.call(person, "Serbia");







// const obj = {
//     ocean: "Pacific",
//     area: "30% of the world"
// }

// function greet () {
//     return `${this.ocean} takes ${this.area}`;

// }

// console.log(greet.apply(obj));