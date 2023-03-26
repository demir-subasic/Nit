class Car {
    constructor(make, model, maxSpeed) {
        this.make = make,
        this.model = model,
        this.maxSpeed = maxSpeed,
        this.currentSpeed = 0,
        this.isMoving = this.currentSpeed > 0 ? true : false,
        this.isOn = false;
    }

    motorOn() {
        this.isOn = true
    }

    accelarate() {
        if(this.isOn === false) {
            console.error("Auto nije upanjen")
            this.motorOn()
            this.currentSpeed += 20
        } else {
            if(this.currentSpeed === this.maxSpeed) {
                console.error("Auto je dostigao maksimalnu brzinu")
            } else {
                this.currentSpeed += 20
            }
        }

        this.isMoving = true;
    }
    
    brake() {
        if(this.isOn === true) {
            if(this.currentSpeed === 0) {
            console.error("Ne mozes da smanjis brzinu manju od 0");
            } else {
            this.currentSpeed -= 20
            }
        } else {
            console.error("Auto je ugasen")
        }
        
    }
}

const audi = new Car("Audi", "A3", 220);
const bmw = new Car("BMW", "530", 260);

audi.brake()

console.log(audi);

bmw.accelarate()
bmw.accelarate()
bmw.accelarate()
bmw.accelarate()
bmw.accelarate()
bmw.accelarate()
bmw.accelarate()
bmw.accelarate()
bmw.accelarate()
bmw.accelarate()
bmw.accelarate()
bmw.accelarate()
bmw.accelarate()
bmw.accelarate()



console.log(bmw);