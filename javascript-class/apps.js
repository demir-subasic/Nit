class Car {
    constructor(make, model,maxSpeed) {
        this.make = make,
        this.model = model,
        this.maxSpeed = maxSpeed,
        this.currentSpeed = 0;
        this.isMoving = this.currentSpeed > 0 ? true : false;
    }
    accelerate (speed) {
        this.isMoving = true;
        this.currentSpeed += speed;
    }
    brake() {
        if(this.currentSpeed === 0) {
            console.error("Ne mozes da smanjis brzinu manju od 0");
        }
        else{
            this.currentSpeed -= 20;
        }
    }
    
}

const audi = new Car("Audi", "A3", 220);
const bmw = new Car("BMW", "530", 240)

console.log("AUDI", audi);

bmw.accelerate(300);
bmw.brake();
console.log("BMW", bmw);


//DOMACI
// broj vrati, jos jedan kljuc da li je motor startovan ili nije, 2 metode koje pokazuje da li je motor upaljen ili ugasen 
// currentSpeed ne moze da ide preko maxSpeed u accelerate  i ako se to desi da izbaci error
// ne mozemo ubrzati da ako je motor ugasen i ne mozemo smanjiti brzinu ako je ugasen motor 
// kad motor nije upaljen ne moze raditi accelerate 