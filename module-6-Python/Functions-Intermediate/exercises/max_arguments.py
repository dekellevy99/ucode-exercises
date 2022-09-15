def max_arguments():
    max_arguments_so_far = 0
    def inner_func(*args, **kwargs):
        nonlocal max_arguments_so_far
        cur_num_arguments = len(args) + len(kwargs)
        if cur_num_arguments > max_arguments_so_far:
            max_arguments_so_far = cur_num_arguments
        print("Function was called with: ", max_arguments_so_far)
    return inner_func

func = max_arguments()
func()
func(1, 2, 3, 4, avi=4, bananas=5)
func([5,4,7,8,2], 2)


