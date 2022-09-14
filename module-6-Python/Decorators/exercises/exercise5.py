def cache_decorator(func):
    results = {}
    def inner(x):
        if x not in results:
            results[x] = func(x)
        return results[x]
    return inner


@cache_decorator
def fibo(n):
    print("calculating for n = ", n)
    if n == 0 or n == 1:
        return n
    else:
        return fibo(n-1) + fibo(n-2)

print(fibo(9))
