// class Osoba {
//     constructor(ime, godine){
//        let _ime = ime;
//        let _godine = godine;

//        this.getIme = function(){
//         return _ime
//        }

//        this.getGodine = function(){
//         return _godine
//        }

//        this.setIme = function(ime){
//         _ime = ime
//        }

//        this.setGodine = function(godine){
//         _godine = godine
//        }
//     }
// }

// let osoba = new Osoba("Pera", 25)

// console.log(osoba.getIme())
// console.log(osoba.getGodine())

// osoba.setIme("Neko")
// osoba.setGodine(30)

// console.log(osoba.getIme())
// console.log(osoba.getGodine())





// console.log("_________________________");





// class Student {
//     constructor(ime, prezime, pol, index, godine){
//         let _ime = ime;
//         let _prezime = prezime;
//         let _pol = pol;
//         let _index = index;
//         let _godine = godine;


//         this.getIme = function(){
//             return _ime
//         }
    
//         this.getPrezime = function(){
//             return _prezime
//         }

//         this.getPol = function(){
//             return _pol
//         }

//         this.getIndex = function(){
//             return _index
//         }
//         this.getGodine = function(){
//             return _godine
//         }

//         this.setIme = function(ime){
//             _ime = ime
//         }

//         this.setPrezime = function(prezime){
//             _prezime = prezime
//         }
        
//         this.setPol = function(pol){
//             _pol = pol
//         }

//         this.setIndex = function(index){
//             _index = index
//         }
//         this.setGodine = function(godine){
//             _godine = godine
//         }

//     }
// }

// const Ispisi = (content) => {
//     console.log(content)
// }

// let student = new Student("Demir", "Subasic", "Muski", 1, 20)

// Ispisi(student.getIme())
// Ispisi(student.getPrezime())
// Ispisi(student.getPol())
// Ispisi(student.getIndex())
// Ispisi(student.getGodine())


// console.log("----------------NOVE VRENDOSTI-----------")


// student.setIme("Umer")
// student.setPrezime("Sacirovic")
// student.setPol("Muski")
// student.setIndex(9)
// student.setGodine(16)


// Ispisi(student.getIme())
// Ispisi(student.getPrezime())
// Ispisi(student.getPol())
// Ispisi(student.getIndex())
// Ispisi(student.getGodine())











//Potrebno je implementirati sistem upravljanja radnicima u nekoj firmi. Svi radnici imaju zajednička svojstva (ime, prezime, godine),
//ali postoje i neke razlike među radnicima,
//npr. menadžer i običan radnik imaju različite nadležnosti i plate.
//Potrebno je kreirati klase Radnik i Menadžer koje nasleđuju zajednička svojstva iz klase Osoba,
//a zatim dodati i neke dodatne metode i svojstva.
//Osim toga, sve privatne varijable treba da budu enkapsulirane.



const ispisi = (content) => {
    console.log(content)
}


class Person {
    constructor(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}


class Menager extends Person{
    #competence
    #salary
    constructor(name, lastName, age, competence, salary){
        super(name, lastName, age)
        this.#competence = competence
        this.#salary = salary
    }
    setCompetence(competence){
        this.#competence = competence
    }
    getCompetence(){
        return this.#competence;
    }
    setSalary(salary){
        this.#salary = salary
    }
    getSalary(){
        return this.#salary;
    }




    AverageEarnings(){
        return `${this.name} ${this.lastName} has an average salary of ${this.#salary}`
    }


    AverageAge(){
        return `${this.name} has ${this.age} age`
    }
}
let menager1 = new Menager("Omer", "Rajic", 19, "Production Control", "1500$")




class Worker extends Menager{
    #competence
    #salary
    constructor(name, lastName, age, competence, salary){
        super(name, lastName, age, competence, salary)
        this.#competence = competence
        this.#salary = salary
    }
    setCompetence(competence){
        this.#competence = competence
    }
    getCompetence(){
        return this.#competence;
    }
    setSalary(salary){
        this.#salary = salary
    }
    getSalary(){
        return this.#salary;
    }
   


    Obligations(){
        return `${super.AverageAge()} and his responsibility is ${this.#competence}`
    }


}


let worker1 = new Worker("Demir", "Subasic", 21, "Management", "1000$")



ispisi(menager1.AverageEarnings())
ispisi(menager1.AverageAge())


ispisi(worker1.AverageEarnings())
ispisi(worker1.Obligations())


ispisi("")
ispisi("_______________POSLE SETOVANJA_______________")
ispisi("")




menager1.setSalary("400$")
worker1.setCompetence("Worker Control")


ispisi(menager1.AverageEarnings())
ispisi(worker1.Obligations())