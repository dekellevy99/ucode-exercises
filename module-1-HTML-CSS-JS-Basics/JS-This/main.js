// ---- exercise 1 ----
const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        this.hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }  
  
  person.feed() //should alert "I'm no longer hungry"

// ---- exercise 2 ----

  const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);

// ---- exercise 3 ----

  const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fuel: 0,
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());

  // ---- exercise 4 ----

  const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },

    stealCoins: function(number){
        this.coinCount -= number;
    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

// ---- exercise 5 ----
  const revealSecret = function () {
    return this.secret;
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result);
  };
  
  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
  };
  
  const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);

// ---- exercise 6 (including extensions) ----
const coffeeShop = {
    beans: 40,
    money: 100,
  
    drinkRequirements: {
      latte: {beanRequirments: 10, price: 20},
      americano: {beanRequirments: 5, price: 10},
      doubleShot: {beanRequirments: 15, price: 30},
      frenchPress: {beanRequirments: 12, price: 24},
    },
  
    makeDrink: function (drinkType) {
        if(!this.drinkRequirements[drinkType]){
            console.log("Sorry, we don't make " + drinkType);
            return false;
        }else if(this.beans >= this.drinkRequirements[drinkType]["beanRequirments"]){
            this.beans -= this.drinkRequirements[drinkType]["beanRequirments"];
            return true;
        }else{
            console.log("Sorry, we're all out of beans");
            return false;
        }
    },

    buyBeans: function(numBeans){
        const pricePerBean = 2;
        let cost = pricePerBean * numBeans;
        if(cost > this.money){
            console.log("Sorry, we can't affort this amount of benas.")
        }else{
            this.money -= cost;
            this.beans += numBeans;
        }
    },

    buyDrink: function(drinkType){
        let isAvailableDrink = this.makeDrink(drinkType);
        if(isAvailableDrink){
            this.money += this.drinkRequirements[drinkType].price;
        }


    }
}
  
coffeeShop.buyDrink("latte"); 
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); 
