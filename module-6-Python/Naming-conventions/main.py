class Test:
  def __init__(self):
    self.foo = 11
    self.__baz = 23 # double nderscore makes it unique for the class and only for internal user purpose

  def add(self):
    self.__baz += 1
    print(self.__baz)

instance = Test()
instance.add() 
# print(instance.__baz) # we can't access it
print(instance._Test__baz) 