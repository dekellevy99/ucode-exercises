def add_to_list(value, nums=[]):
    nums.append(value)
    return nums


# def add_to_list(value, nums=None):
#   nums = nums or []
#   nums.append(value)
#   return nums 

print(add_to_list(1))
print(add_to_list(2)) 



def more_is_better(*args):
    print(args)


more_is_better(1, 2, 3, 4) 
more_is_better(1) 
more_is_better(1, "hello", 4) 
more_is_better([1, "hello", 4]) 

tup = (1,2,3)
print(tup)
print(*tup)


def print_bag(bananas, apples):
    print("bananas", bananas)
    print("apples", apples)

tup = [99, 50]
print_bag(*tup)

print_bag(apples=5, bananas=10)
fruits = {"apples": 4, "bananas": 5}
print_bag(**fruits)

def all_arguments(num, *args, **kwargs):
  print("regular argument", num)
  print("args", args)
  print("kwargs", kwargs)

all_arguments(3, "arg1", "arg2", arg3=3, arg4=[1,2])

def hello(name = "Margo"):
  """this is a greeting function"""
  print(f'Hello {name.capitalize()}!') 

print("Documentation: ", hello.__doc__)
print("Name: ", hello.__name__)
print("Code at: ", hello.__code__)
print("defaults : ", hello.__defaults__) 


def get_power_of(exponent):
    def power(base):
        return base ** exponent
    return power

calc_power_of_2 = get_power_of(2)
calc_power_of_4 = get_power_of(4)
print(calc_power_of_2(5))    # 5^2 = 25
print(calc_power_of_2(7))    # 7^2 = 49
print(calc_power_of_4(2))    # 2^4 = 16
print(calc_power_of_4(3))    # 3^4 = 81 

print("===================================")

g = 'I am global'

def func():
  global g
  g = 'overrideing global'
  print('func: ', g)

func()
print('outside: ', g) 

print("======================================")
def outer_func():
    local_var = 11
  
    def inner_func():
        # nonlocal local_var
        local_var = 21
        print("inner_func local_var = ", local_var)
  
    inner_func()
    print("outer_func local_var = ", local_var)

outer_func()

print("=========================================")

# global_var = 10

# def outer_func():
#     def inner_func():
#         global global_var
#         global_var = 21
#         print("inner_func global_var = ", global_var) 
#     inner_func()
#     print("outer_func global_var = ", global_var)

# outer_func()
# print('outside global_var = ', global_var) 
print("=========================================")

def foo():
  x = 1
  
  def inner():
    print(x)    # notice this inner function using the outer function's variable
  
  return inner

baz = foo()     #out here, x doesn't exist
baz() 
print("=========================================")

print(5, 6, 7, sep="*")

print("=========================================")


def print_suitcase(**suitcase):
  for item,ammount in suitcase.items():
    print(item, ammount) 

print_suitcase(shirts=3)
print_suitcase(shirts=4, shoes=2, watermelon=16) 