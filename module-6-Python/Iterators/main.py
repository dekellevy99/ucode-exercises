numbers = [11,3,64,17,94]
for i,v in enumerate(numbers, 100):
  print(i, v) 



string_iterator = iter("Python")
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator)) 
# print(next(string_iterator)) 

numbers = [10, 12, 15, 18, 20]
fruits = ("apple", "pineapple", "blueberry")
message = "I love Python"
print(iter(numbers))
print(iter(fruits))
print(iter(message))

class PrintNumbers:
  def __init__(self, size):
    self.max = size

  def __iter__(self):
    self.numbers = list(range(self.max + 1))
    self.counter = 0
    return self

  def __next__(self):
    if self.counter >= self.max:
      raise StopIteration

    self.counter += 1
    return self.numbers[self.counter]

printNum = PrintNumbers(10)
myiter = iter(printNum)
print(myiter)
print(next(myiter))


def reverse(iterable):
  length = len(iterable)
  for i in range(length - 1, -1, -1):
    yield iterable[i]    # For loop to print the reversed string


for item in reverse("hello"):
  print(item) 

for item in reverse(["Eric", 1985, ["Dan", "James", "Anna"]] ):
  print(item) 

gen = (x for x in range(20))
print(gen)
print(type(gen))

  