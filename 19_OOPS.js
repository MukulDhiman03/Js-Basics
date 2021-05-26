/*
  Object Literal For Creating Objects
let car = {
    name: 'Maruti 800',
    topSpeed: 90,
    run: function() {
        console.log("Car is running");
    }
}
console.log(car.run())
*/


/*Creating a constructor for cars*/
function generalCar(givennName, givenSpeed) {
    this.name = givennName;
    this.topSpeed = givenSpeed;
    this.run = function() {
        console.log(`${this.name} is running`);
        return 0;
    }
    this.analyze = function() {
        console.log(`this car is slower by ${200 - this.topSpeed} than other cars`)
    }
}

let car = new generalCar('Nisaan', 120);
// console.log(car);

let car1 = new generalCar("Maruti", 150);
console.log(car1.run())
console.log(car1.analyze())