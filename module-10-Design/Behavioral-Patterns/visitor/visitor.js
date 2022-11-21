class Oven {
    constructor(id) {
      this.id = id;
    }
  
    bakeBread() {
      console.log('Baking bread...');
    }
  
    accept(visitor) {
      visitor.visitOven(this);
    }
  
    toString() {
      return `Oven{id=${this.id}}`;
    }
  }
  
  class Microwave {
    constructor(id) {
      this.id = id;
    }
  
    accept(visitor) {
      visitor.visitMicrowave(this);
    }
  
    toString() {
      return `Microwave{id=${this.id}}`;
    }
  }
  
  class CleaningVisitor {
    visitOven(oven) {
      console.log(`Cleaning the oven ${oven}`);
    }
    visitMicrowave(microwave) {
      console.log(`Cleaning the food microwave ${microwave}`);
    }
  }
  
  const appliances = [];
  appliances.push(new Oven(1));
  appliances.push(new Microwave(3));
  const cleaningVisitor = new CleaningVisitor();
  for (const appliance of appliances) {
    appliance.accept(cleaningVisitor);
  }