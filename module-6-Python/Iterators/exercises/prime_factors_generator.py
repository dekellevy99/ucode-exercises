import math

def get_prime_factors_generator(number):
    i = 2
    while i * i <= number:
        if number % i != 0:
            i += 1
        else:
            number = int(number / i)
            yield i
    if number > 1:
        yield number


for x in get_prime_factors_generator(100):
    print(x) 