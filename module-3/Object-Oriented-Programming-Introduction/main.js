class Animal{
    constructor(name, numLegs){
        this.name = name;
        this.numLegs = numLegs;
        this.children = [];
    }

    giveBirth(name){
        this.children.push(name);
    }
}

const animal = new Animal("Wolf", 4);
console.log(`${animal.name} has ${animal.numLegs} legs`);
animal.giveBirth("Dolly")
console.log(animal.children)


class Human{
    constructor(name, age, isFriendly){
        this.name = name;
        this.age = age;
        this.isFriendly = isFriendly;
    }
}

const human = new Human("Dekel", 23, true);
console.log(`${human.name} is ${human.age} years old and he is ${human.isFriendly ? 'firendly' : 'not friendly'}`)

class Vehicle{
    constructor(x, y, speed, fuel){
        this._x = x;
        this._y = y;
        this._speed = speed;
        this._fuel = fuel; 
        Vehicle.carsSold++;
    }

    set speed(amount) {
        if (amount < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = amount
    }

    get speed(){
        return this._speed
    }


    set fuel(fuel){
        if(fuel < 0 || fuel > 150){
            return console.log("fuel must be between 0 to 150")
        }else{
            this._fuel = fuel;
        }
    }

    get fuel(){
        return this._fuel;
    }

    static getInfo(){
        console.log(`We've sold ${Vehicle.carsSold} vehicles`)
    }

    static calculateMoney(){
        console.log(`Made ${30000 * Vehicle.carsSold} dollars`);
    }
}

Vehicle.carsSold = 0;
const vec1 = new Vehicle(0,0,100);
Vehicle.getInfo();
const vec2 = new Vehicle(1,1,200);
Vehicle.getInfo();
const vec3 = new Vehicle(2,2,300);
Vehicle.calculateMoney();

const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined

c.speed = 10
console.log(c.speed)

const vec4 = new Vehicle(0,0,100,120);
console.log(vec4.fuel);
vec4.fuel = 90;
console.log(vec4.fuel);



