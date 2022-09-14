import datetime


def time_decorator(func):
    def inner(*args, **kwargs):
        before_exec = datetime.datetime.now()
        res = func(*args, **kwargs)
        after_exec = datetime.datetime.now()
        duration = after_exec - before_exec
        print(duration)
        return res
    return inner


@time_decorator
def sum_many(range_):
    sum = 0
    for num in range(range_):
        sum += num
    return sum

res = sum_many(100000)



