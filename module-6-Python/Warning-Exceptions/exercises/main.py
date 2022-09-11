
# ==== exercise 1 ====
dividend = float(input("Enter the dividend: "))
divisor = float(input("Enter the divisor: "))
quotient = dividend/divisor
print(math.floor(10)) 

# 1. TypeError when get input from the user
# 2. ZeroDivision 
# 3. math is not defined

# ==== exercise 2 ====
def get_list_element(my_list, index):
    try:
        print(my_list[index])
    except IndexError as exp:
        print(exp)

get_list_element([1,2,3,4], 0)

# ==== exercise 3 ====
try:
    age = int(input("How old are you? "))
except (ValueError, TypeError) as exp:
    print(exp)
    print("input must be an integer number only")

# ==== exercise 4 ====
def divide(x, y):
    try:
        print(f'{x}/{y} is {x / y}')
    except ZeroDivisionError as exp:
        print(exp)
    except TypeError as exp:
        print(exp)

divide(10, 0)