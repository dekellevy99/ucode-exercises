class Person {
    private id: number;
    private firstName: string;
    private lastName: string;
    private phone: string;
    private address: string;
    private height: number;
    private weight: number;
    private age: number;
  
    public static Builder = class {
      //Required Parameters
      private id: number;
      private firstName: string;
      private lastName: string;
  
      //Optional Parameters (with defaults)
      private phone: string = '123-456-789';
      private address: string = 'Street 1, City';
      private height: number = 1.7;
      private weight: number = 75.5;
      private age: number = 30;
  
      constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
      }
  
      setPhone(phone: string) {
        this.phone = phone;
        return this;
      }
  
      setAddress(address: string) {
        this.address = address;
        return this;
      }
  
      setHeight(height: number) {
        this.height = height;
        return this;
      }
  
      setWeight(weight: number) {
        this.weight = weight;
        return this;
      }
  
      setAge(age: number) {
        this.age = age;
        return this;
      }
  
      build(): Person {
        return new Person(this);
      }
    };
  
    private constructor(builder) {
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