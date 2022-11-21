const milk: Milk = new Cow().getMilk();
const coffeeMachine: CoffeeMachine = new CoffeeMachine();
const foam: Foam = coffeeMachine.makeFoam(milk);
const coffee: Coffee = coffeeMachine.makeCoffee(new CoffeeBean(2));
const storage: Storage = new Storage();
const cup: Cup = storage.getCup();
cup.add(coffee);
cup.add(foam);

class BaristaFacade {
    private cow: Cow = new Cow();
    private coffeeMachine: CoffeeMachine = new CoffeeMachine();
    private storage: Storage = new Storage();
  
    makeCappuccino(): Cup {
      const milk: Milk = this.cow.getMilk();
      const foam: Foam = this.coffeeMachine.makeFoam(milk);
      const coffee: Coffee = this.coffeeMachine.makeCoffee(new CoffeeBean(2));
      const cup: Cup = storage.getCup();
      cup.add(coffee);
      cup.add(foam);
      return cup;
    }
  }

  const baristaFacade: BaristaFacade = new BaristaFacade();
  const cup: Cup = baristaFacade.makeCappuccino();