//this includes the vehicle class as a module

const VehicleModule = require('./vehicle').Vehicle
// i changed the make and model and year of the car i hope thats ok 

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Porsche", "Sedan", "2020", "color", "mileage");
console.log(v.make)



class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 2;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 184;
        this.fuel = 30;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage > 10000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space for all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }


}


let myCar = new Car('Porsche', 'rad_sedan', '2020', 'green', 25000)

myCar.start()
// myCar.loadPassenger(2)
// myCar.stop()
// myCar.checkService()

console.log(myCar)