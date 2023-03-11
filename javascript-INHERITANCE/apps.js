//primer 
// 1 lvll osoba
// 2 lvl radnik 
// 3 lvl profesor 
//svaki treba da nasledi od proslih

// class Osoba {
//     constructor (ime, prezime, nivoObrazovanja){
//         this.ime = ime
//         this.prezime = prezime
//         this.nivoObrazovanja = "srednja skola"
//     }
//     moving = (vehicle) => console.log (`Krece se ${vehicle}`)
// }


// class Radnik extends Osoba {
//     constructor (ime, prezime, posao){
//         super(ime, prezime)
//         this.nivoObrazovanja = "fakultet"
//         this.posao = posao
//     }
//     sleep = (hours) => console.log (`Spava ${hours} sati`)
//     moving = (vehicle) => console.log (`Krece se ${vehicle}`)
// }


// class Profesor extends Radnik {
//     constructor(ime, prezime, posao, nivoObrazovanja, predmet) {
//         super(ime,prezime,posao)
//         this.nivoObrazovanja = "2 fakulteta"
//         this.predmet = predmet
//     }
//     sleep = (hours) => console.log (`Spava ${hours} sati`)
//     moving = (vehicle) => console.log (`Krece se ${vehicle}`)
// }


// const demir = new Radnik("Demir", "Subasic", "Srednja skola")
// const omer = new Radnik("Omer", "Subasic", "Programer")
// const dzemil = new Profesor("Dzemil", "Subasic", "Privatni fakultet", "Matematika")


// dzemil.sleep(6)
// demir.moving("autobusom")











// PRIMER SA STUDENTOM 

class Person {
    constructor(name,lastName, age) {
        this.name = name,
        this.lastName = lastName,
        this.age = age;
    }

    move = () => console.log("Start to move");
}

class Employee extends Person {
    constructor(position,hRate,job,name,lastName,age) {
        super(name, lastName, age);
        this.job = job,
        this.position = position,
        this.hRate = hRate
    }
    introduction = () => console.log(`My name is ${this.name} ${this.lastName} and I work as ${this.job}
    and my position is ${this.position}`);

    calculateMonthlyIncome = () => this.hRate * 8 * 5 * 4;
}


class Engineer extends Employee {
    constructor (langs, degree, job,position, hRate, name, lastName, age) {
        super(job, position, hRate, name, lastName, age);
        this.langs = langs,
        this.degree = degree
    }

    programming = () => console.log("Start writing some code ...")

    learnNewLanguage = (lang) => {
        console.log("Start learning", lang)
        for(let i = 0; i < 99999; i++) {}

        console.log("Finished learned language");
        this.langs = [...this.langs, lang];
    };
}


const p1 = new Person ("John","Doe",21);



console.log(p1);
p1.move();

console.log(e1)
console.log(e1.calculateMonthlyIncome());