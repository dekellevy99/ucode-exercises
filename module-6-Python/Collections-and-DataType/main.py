
x = 10
y = x
print(id(x))
print(id(y))
print(id(10))  

print("====")
tup1 = (10, 20, "Hello")
tup2 = (10, 20, "Hello")
print(tup1 == tup2)
print(tup1 is tup2)
print(id(tup1), id(tup2), sep="\n")

set1 = {10,2,0}
set2 = {10,2,0}

print(set1 == set2)
print(set1 is set2)

list_ = [3, 4, "Bobby"]
list_str = str(list_)
print(list_str)

dict = {3 : "kuku"}
dict_str = str(dict)
print(dict_str) 

str_to_int = int("304")
print(str_to_int)

float_to_int = int(3.05)
print(float_to_int)

int_to_float = float(9)
print(int_to_float) 

print("========================")
x = [1,2,3]
copy = x 
x += [4]             # changing the list
print(x)              # [1,2,3,4]
print(copy)           # [1,2,3,4] 

print(range(10) + range(5))