class Person {
    constructor(builder) {
      this.id = builder.id;
      this.firstName = builder.firstName;
      this.lastName = builder.lastName;
      this.address = builder.address;
      this.phone = builder.phone;
      this.height = builder.height;
      this.weight = builder.weight;
      this.age = builder.age;
    }
  }
  
  Person.Builder = class {
    constructor(id, firstName, lastName) {
      // Required Parameters
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
  
      // Optional Parameters (with defaults)
      this.phone = '123-456-789';
      this.address = 'Street 1, City';
      this.height = 1.7;
      this.weight = 75.5;
      this.age = 30;
    }
  
    setPhone(phone) {
      this.phone = phone;
      return this;
    }
  
    setAddress(address) {
      this.address = address;
      return this;
    }
  
    setHeight(height) {
      this.height = height;
      return this;
    }
  
    setWeight(weight) {
      this.weight = weight;
      return this;
    }
  
    setAge(age) {
      this.age = age;
      return this;
    }
  
    build() {
      return new Person(this);
    }
  };
  