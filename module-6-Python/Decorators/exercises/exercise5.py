def cache_decorator(func):
    results = {}
    def inner(*args, **kwargs):
        key = (args, frozenset(sorted(kwargs.items())))
        if key not in results:
            results[key] = func(*args, **kwargs)
        return results[key]
    return inner


@cache_decorator
def fibo(n):
    print("calculating for n = ", n)
    if n == 0 or n == 1:
        return n
    else:
        return fibo(n-1) + fibo(n-2)


@cache_decorator
def add_stam(*args, **kwargs):
    print("calculating for = ", args)
    sum = 0
    for i in args:
        sum += i
    return sum


@cache_decorator
def add(x, *, addition=0, more=0):
  print("running  add")
  return x + 1 + addition + more 


print("fibo(9) = ", fibo(9))
print("add(1,2,3, stam=7) = ", add_stam(1, 2, 3, stam=7))

add(1, addition=0, more=0)
add(1, more=0, addition=0)
# add(1, more=0)
# add(1) 