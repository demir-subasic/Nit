// class Animal {
//     constructor(species, weight) {
//         this.species = species;
//         this.weight = weight;
//     }

//     wakeUp(){
//         return `${this.species} is going to wake up`
//     }

//     eat(){
//     return `${this.species} have a ${this.weight} kilos`
//     }

//     sleep(){
//         return `${this.species} sleeping a 4 hours per day`
//     }
//     barking(){
//         return `${this.species} barking all time`
//     }
// }

// const macka = new Animal("Sibirksa", 7)
// macka.eat()

// const ptica = new Animal("Golub")
// ptica.sleep()

// class Elephant extends Animal {
//     constructor(species, weight){
//     super(species, weight) 
//     }

//     dailyRoutine(){
//         return `${super.wakeUp()} then ${super.eat()} and then ${super.sleep()}`
//     }
// }

// const display = (content) => {
//     console.log(content)
// }

// const elephant = new Elephant("African", "1T")

// display(elephant.dailyRoutine())




// class Dog extends Animal {
//     constructor(species, weight){
//         super(species, weight)
//     }

//     dailyRoutine(){
//         return `${super.wakeUp()} then ${super.eat()} and then ${super.sleep()} and then ${this.barking()}`
//     }

// }
// const dog = new Dog("Husky", "15kg")

// display(dog.dailyRoutine())









//DOMACI

// class Osoba {
//     constructor(ime, prezime){
//         this.ime = ime;
//         this.prezime = prezime
//     }
// }

// class Student extends Osoba {
//     constructor(ime, prezime, fakultet){
//         super(ime, prezime)
//         this.fakultet = fakultet;
//     }
//     prijavaIspita(){
//         return `Ja sam ${this.ime} ${this.prezime} sa fakluteta ${this.fakultet}`
//     }
// }

// const student = new Student("Demir", "Subasic", "Racunarskih nauka")

// const display = (content) => {
//     console.log(content)
// }

// display(student.prijavaIspita())















//VEZBA
//Napraviti Klasu Vozilo koja ima boju, brzinu i model i tri metode
//pokreni(), zaustavi(), promeniBrzinu()
//Napraviti klasu Automobil koja nasledjuje klasu Vozilo
//Klasa Automobil ima jedan novi properti: marka
//Napraviti instancu za obe klase i pozvati metode i za Vozilo i Automobil



class Vehicle {
    constructor(model, color, speed){
        this.model = model
        this.color = color
        this.speed = speed
    }
}
const vehicle = new Vehicle("")

class Car extends Vehicle{
    constructor (color, speed, model, brand){
        super(color, speed, model)
        this.brand = brand
    }
    pokreni() {
        console.log(`Vozilo ${this.model} se pokrenulo`)
    }

    zaustavi(){
        console.log(`Vozilo ${this.model} ima brzinu od ${this.speed}`)
    }

    promeniBrzinu(){
        console.log(`${this.color} ${this.model} marke ${this.brand}, promenio je brzinu na ${this.speed}`)
    }

}
const car = new Car("Honda", "red", 0)
const car1 = new Car("Mercedes", "blue", 0)
const car3 = new Car("Passat", "Beli", "20", "Volkswagen")

car.pokreni()
car1.zaustavi()
car3.promeniBrzinu()





