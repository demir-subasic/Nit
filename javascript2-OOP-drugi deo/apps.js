// class Person {
//     constructor(name, age){
//     this.name = name;
//     this.age = age;
//     }


// sayHello() {
//     console.log(`Hello, my name is ${this.name}, and my age is ${this.age}`);
// }
// }


// const person1 = new Person('John', 30)

// person1.sayHello();






class Osoba  {
    constructor(name, lastName, age, gender){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    aboutMe() {
        console.log(`Hello my name is ${this.name}, my last name is ${this.lastName}, my age is ${this.age}, and my gender is ${this.gender}`)
    }
    
}


const osoba1 = new Osoba("Demir", "Subasic", 21, "male");

osoba1.aboutMe();







class Skola {
    constructor(profesor, djak, ucionica, cas){
        this.profesor = profesor;
        this.djak = djak;
        this.ucionica = ucionica;
        this.cas = cas;
    }

    skolovanje() {
        console.log(`Ucenik ${this.djak}, ima cas kod profesora ${this.profesor}, u prostoriji broj ${this.ucionica}, i ima cas ${this.cas}`)
    }
}

const predavanje = new Skola("Remzo", "Demir", 23, "programiranje");

predavanje.skolovanje();