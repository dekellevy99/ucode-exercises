def info_decorator(func):
    def inner(*args, **kwargs):
        print("Function Name: ", func.__name__)
        print("args: ", args)
        print("kwargs: ", kwargs)
        res = func(*args, **kwargs)
        print("Return Value: ", res)
        print("Return Type: ", type(res))
        return res
    return inner

@info_decorator
def stam_function(x, y, z):
    return x + y + z

stam_function(10, 2, 8)