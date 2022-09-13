class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print("Hi there, I am " + self.name) 


p1 = Person("Jezrien", 102)
p2 = Person("Tal", 96)
print(p1.name) # outputs: Ana
print(p2.name) # outputs: Javier 

p1.introduce() # outputs: Hi there, I am Jezerien
p2.introduce() # outputs: Hi there, I am Tal