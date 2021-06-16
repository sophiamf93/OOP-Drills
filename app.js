let person1 = {
    name: 'Logan',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};

let person2 = {
    name: 'Dallas',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};

let person3 = {
    name: 'Taylor',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};

let person4 = {
    name: 'Amelia',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};

let person5 = {
    name: 'Ethan',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
};

Person.prototype.sayHi = function () {
    console.log(`Hey! My name is ${this.name} and I am ${this.age} years old and live in ${this.city}.`)
};

let p1 = new Person('Logan', 'Birmingham', 26)
let p2 = new Person('Dallas', 'Hoover', 28)
let p3 = new Person('Taylor', 'Charleston', 30)
let p4 = new Person('Amelia', 'Vestavia', 35)
let p5 = new Person('Ethan', 'West Blocton', 29)


p1.sayHi();
p2.sayHi();
p3.sayHi();
p4.sayHi();
p5.sayHi();

class People {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    greet() {
        console.log((`Hey! My name is ${this.name} and I am ${this.age} years old and live in ${this.city}.`))
    }
};


let ppl1 = new People('Logan', 'Birmingham', 26)
let ppl2 = new People('Dallas', 'Hoover', 28)
let ppl3 = new People('Taylor', 'Charleston', 30)
let ppl4 = new People('Amelia', 'Vestavia', 35)
let ppl5 = new People('Ethan', 'West Blocton', 29)

ppl1.greet();
ppl2.greet();
ppl3.greet();
ppl4.greet();
ppl5.greet();


class Vehicle {
    constructor(type, manufacturer, wheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicle() {
        console.log(`This vehicle is made by ${this.manufacturer} and has ${this.wheels} wheels.`)
    }
};


class Sedan extends Vehicle {
    constructor(type, manufacturer, wheels, doors, size, mpg) {
        super(type, manufacturer, wheels);
        this.doors = doors;
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This vehicle is a ${this.type} made by ${this.manufacturer} and has ${this.wheels} wheels. Has ${this.doors} doors, is a ${this.size} vehicle, and gets ${this.mpg} mpg.`)
    }
}

class Truck extends Vehicle {
    constructor(type, manufacturer, wheels, hasTruckBed, doors, size, mpg) {
        super(type, manufacturer, wheels);
        this.hasTruckBed = hasTruckBed;
        this.doors = doors;
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        if (this.hasTruckBed) {
            console.log(`This vehicle is a ${this.size} sized ${this.type}. It has a truck bed and made by ${this.manufacturer}. It has ${this.wheels} wheels, ${this.doors} doors, and gets ${this.mpg} mpg.`)
        } else {
            console.log(`This vehicle is a ${this.size} sized ${this.type}. It does not have a truckbed and made by ${this.manufacturer}. It has ${this.wheels} wheels, ${this.doors} doors, and gets ${this.mpg} mpg.`)
        }
    }
}
class Motorcycle extends Vehicle {
    constructor(type, manufacturer, wheels, steering, doors,) {
        super(type, manufacturer, wheels);
        this.steering = steering;
        this.doors = doors;
    }
    aboutVehicle() {
        console.log(`This vehicle is a ${this.type} made by ${this.manufacturer} and has ${this.wheels} wheels and steers with ${this.steering}.`)
    }
}

v1 = new Sedan('Camry', 'Toyota', 4, 4, 'medium', 35)
v1.aboutVehicle();

v2 = new Truck('Tundra', 'Toyota', true, 4, 4, 'large', 25)
v2.aboutVehicle();

v3 = new Motorcycle('Roadster', 'Harley Davidson', 2, 'handlebars', 0)
v3.aboutVehicle();