def num_of_calls_decorator(func):
    count = 0
    def inner(*args, **kwargs):
        count += 1
        res = func(*args, **kwargs)
        print("Call Number: ", count)
        return res
    return inner

@num_of_calls_decorator
def stam_function():
    pass

stam_function()