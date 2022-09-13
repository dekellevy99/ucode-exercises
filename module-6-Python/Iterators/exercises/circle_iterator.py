class CircleIter:
    def __init__(self, container, num_iters):
        self.container = container
        self.num_iters = num_iters
    
    def __iter__(self):
        self.cur_index = -1
        self.cur_iter = 0
        return self
    
    def __next__(self):
        length = len(self.container)

        if length == 0 or self.cur_iter >= self.num_iters:
            raise StopIteration
        
        else:
            self.cur_index = (self.cur_index + 1) % length
            self.cur_iter += 1
            return self.container[self.cur_index]

for x in CircleIter([1,2], 8):
    print(x, end=" ") 
print()

for x in CircleIter([1,2,3],4):
  print(x, end=" ")

print()
for y in CircleIter([5,6],3):
  print(y, end=" ")
