# FIRST OPTION USING ITERATOR
class MyEnumerate:
    def __init__(self, container, initial_index=0):
        self.container = container
        self.initial_index = initial_index
    
    def __iter__(self):
        self.cur_index = -1
        return self

    def __next__(self):
        if self.cur_index >= len(self.container)-1 or len(self.container) == 0:
            raise StopIteration
        else:
            self.cur_index += 1
            return (self.initial_index + self.cur_index, self.container[self.cur_index])

for idx, val in MyEnumerate([10, 20, 30, 40]):
    print(idx, val)

for idx, val in MyEnumerate([10, 20, 30, 40], 10):
    print(idx, val)


# SECOND OPTION USING GENERATOR
def my_enumerate(container, start_idx=0):
    for i in range(len(container)):
        yield (start_idx + i, container[i])

for index, elem in my_enumerate([10, 20, 30, 40]):
  print(index, elem) 

for index, elem in my_enumerate([10, 20, 30, 40], 10):
  print(index, elem) 