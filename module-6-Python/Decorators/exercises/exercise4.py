def num_of_calls_decorator(func):
    def inner(*args, **kwargs):
        inner.calls += 1
        res = func(*args, **kwargs)
        print("Call Number: ", inner.calls)
        return res
    inner.calls = 0
    return inner

@num_of_calls_decorator
def stam_function():
    pass

stam_function()
stam_function()
stam_function()
stam_function()
