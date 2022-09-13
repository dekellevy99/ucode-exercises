def my_accumulate(container):
    cur_sum = 0
    for elem in container:
        cur_sum += elem
        yield cur_sum

for elem in my_accumulate([1,2,3,4,5]):
    print(elem)