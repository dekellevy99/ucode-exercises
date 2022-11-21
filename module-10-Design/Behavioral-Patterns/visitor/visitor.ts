interface Appliance {
    accept(visitor: Visitor): void;
  }


//There are more appliance like microwace and so on...
class Oven implements Appliance {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    bakeBread(): void {
        console.log('Baking bread...');
    }

    accept(visitor: Visitor): void {
        visitor.visitOven(this);
    }

    toString(): string {
        return `Oven{id=${this.id}}`;
    }
}


interface Visitor {
    visitOven(oven: Oven): void;
    visitFoodProcessor(foodProcessor: FoodProcessor): void;
    visitMicrowave(microwave: Microwave): void;
}


class CleaningVisitor implements Visitor {
    visitOven(oven: Oven): void {
      console.log(`Cleaning the oven ${oven}`);
    }
    visitFoodProcessor(foodProcessor: FoodProcessor): void {
      console.log(`Cleaning the food processor ${foodProcessor}`);
    }
    visitMicrowave(microwave: Microwave): void {
      console.log(`Cleaning the food microwave ${microwave}`);
    }
  }

  const appliances: Appliance[] = [];
  appliances.push(new Oven(1));
  appliances.push(new FoodProcessor(2));
  appliances.push(new Microwave(3));
  const cleaningVisitor: CleaningVisitor = new CleaningVisitor();
  for (const appliance of appliances) {
    appliance.accept(cleaningVisitor);
  }