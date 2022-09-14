class Prime:
    def __init__(self):
        pass

    def is_prime(self, number):
        if number == 0 or number == 1:
            return False
        
        divisors = [div for div in range(2, number) if number % div == 0]
        return len(divisors) == 0
    
    def are_prime_numbers(self, *args):
        not_prime_numbers = [num for num in args if not self.is_prime(num)]
        return len(not_prime_numbers) == 0
