numbers = [2, 3, 55, 4, 6, 8, 43, 10]

def sum_squares(numbers):
    even_numbers = list(filter(lambda num: num % 2 == 0, numbers))
    num_to_square = even_numbers[-4:] if (len(even_numbers) > 4)  else even_numbers[:]
    return sum(map(lambda num: num**2, num_to_square))

print(sum_squares(numbers))

