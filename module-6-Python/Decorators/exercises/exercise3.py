import time


def slows_down_decorator(func):
    def inner(*args, **kwargs):
        time.sleep(1)
        res = func(*args, **kwargs)
        return res
    return inner


@slows_down_decorator
def print_hello():
    print("Hello")

print_hello()