def reduce(func, iterable, initial = None):
    if initial:
        accomulator = initial
        cur_value_index = 0
    else:
        accomulator = iterable[0]
        cur_value_index = 1

    while cur_value_index < len(iterable):
        cur_value = iterable[cur_value_index]
        accomulator = func(accomulator, cur_value)
        cur_value_index += 1
    
    return accomulator

print(reduce(lambda x, y: x + y, [1, 2, 3, 4])) # should output 10
print(reduce(lambda x, y: x + y, [1, 2, 3, 4], 5)) # should output 15
print(reduce(lambda x, y: x + y, [1], 5)) # should output 6
print(reduce(lambda x, y: x + y, [1])) # should output 1
print(reduce(lambda x, y: x * y, [1, 2, 3, 4, 5])) # should output 120
print(reduce(lambda x, y: x * y, [1, 2, 3, 4, 5], 2)) # should output 240




