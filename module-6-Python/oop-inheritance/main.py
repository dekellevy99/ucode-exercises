class Artist:
    def __init__(self, name, income):
        self.name = name
        self.income = income

    def perform(self):
        print(self.name + " is performing now") 

class Singer(Artist):
    def perform(self):
        print(self.name + " is singing now") 
  
class Actor(Artist):
    def __init__(self, name, income, most_known):
        super().__init__(name, income)
        self.most_known = most_known
    
    def perform(self):
        print(self.name + " is acting now") 

s = Singer("Lis", 43)
s.perform() # outputs: Lis is performing now

a = Actor("Al", 24, "Scar")
a.perform() # outputs: Al is performing now 
print(a.most_known)

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def calculate_area(self):
        return self.width * self.height
    
    def calculate_perimeter(self):
        return 2 * (self.width + self.height)

class Square(Rectangle):
    def __init__(self, length):
        super().__init__(length, length)

s = Square(2)
print(s.calculate_perimeter()) # outputs: 8
print(s.calculate_area()) # outputs: 4

s = Singer("Ellie", 400)
a = Actor("Jerome", 450, "Leob")
ar = Artist("Arnie", 210)
print(type(s))
print(type(a))
print(type(ar)) 

print(isinstance(s, Singer))
print(isinstance(s, Artist))
