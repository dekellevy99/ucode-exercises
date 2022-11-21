interface Store {
    sell(): void;
  }

  class ClothingStore implements Store {
    sell(): void {
      console.log('Selling clothes');
    }
  }
  
  class ToyStore implements Store {
    sell(): void {
      console.log('Selling toys');
    }
  }
  
  class FurnitureStore implements Store {
    sell(): void {
      console.log('Selling furniture');
    }
  }

  enum StoreType {
    Cloths,
    Toys,
    Furnitures,
  }
  
  class StoreFactory {
    createStore(type: StoreType): Store {
      switch (type) {
        case StoreType.Cloths:
          return new ClothingStore();
        case StoreType.Toys:
          return new ToyStore();
        case StoreType.Furnitures:
          return new FurnitureStore();
      }
    }
  }

  const storeFactory = new StoreFactory();
  const store1: Store = storeFactory.createStore(StoreType.Toys);
  const store2: Store = storeFactory.createStore(StoreType.Cloths);
  store1.sell();
  store2.sell();