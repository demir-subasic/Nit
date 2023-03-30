class Animal {
    constructor(species, weight) {
        this.species = species;
        this.weight = weight;
    }

    wakeUp(){
        return `${this.species} is going to wake up`
    }

    eat(){
    return `${this.species} have a ${this.weight} kilos`
    }

    sleep(){
        return `${this.species} sleeping a 4 hours per day`
    }
    barking(){
        return `${this.species} barking all time`
    }
}

const macka = new Animal("Sibirksa", 7)
macka.eat()

const ptica = new Animal("Golub")
ptica.sleep()

class Elephant extends Animal {
    constructor(species, weight){
    super(species, weight) 
    }

    dailyRoutine(){
        return `${super.wakeUp()} then ${super.eat()} and then ${super.sleep()}`
    }
}

const display = (content) => {
    console.log(content)
}

const elephant = new Elephant("African", "1T")

display(elephant.dailyRoutine())




class Dog extends Animal {
    constructor(species, weight){
        super(species, weight)
    }

    dailyRoutine(){
        return `${super.wakeUp()} then ${super.eat()} and then ${super.sleep()} and then ${this.barking()}`
    }

}
const dog = new Dog("Husky", "15kg")

display(dog.dailyRoutine())






