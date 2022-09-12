fruits_tuple = ("apple", "orange", "banana")
print(fruits_tuple)

ff = "apple", "dasd" # also a tuple
print(type(ff))

nested_tuple = ("shoobert", [10, 20, 30], (0, 2.0, 3.5))
print(nested_tuple[0][5])
print(nested_tuple[1][1])

# nested_tuple[1] = 3000 not valid beacuse tuple is imutable
print(nested_tuple)

my_tuple = ("aaa", "bbb", "ccc", "ddd")
print(my_tuple[1:4])

numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
print(numbers[::2])