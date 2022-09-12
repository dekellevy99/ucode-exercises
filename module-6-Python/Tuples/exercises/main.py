#exercise 1
my_tuple = (1, "hii", 2.5, True, False, "fsdf", 4, "das")

#exercise 2
print(my_tuple[3])
print(my_tuple[-3])

#exercise 3
days = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
print(days[:2] + days[3:])

#exercise 4
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
print(numbers[::-1])

#exercise 5
def get_reverse_without_first(tup):
    return tup[:0:-1]

def get_reverse_without_last(tup):
    return tup[-2::-1]


print(get_reverse_without_first((1,2,3)))
print(get_reverse_without_first((2,4,6,8,10,12)))

print(get_reverse_without_last((1,2,3)))
print(get_reverse_without_last((2,4,6,8,10,12)))