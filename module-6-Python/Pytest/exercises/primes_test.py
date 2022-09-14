from primes import Prime

def test_is_three_prime():
    prime = Prime()
    assert prime.is_prime(3) == True,  "Test failed! Wrong result when checking 3 is prime" 


def test_five_six_numbers():
    prime = Prime()
    assert prime.are_prime_numbers(5, 6, 7) == False,  "Test failed! Wrong result when checking [5,6,7] are all primes" 

def test_zero():
    prime = Prime()
    assert prime.is_prime(0) == False,  "Test failed! Wrong result when checking 0 is prime" 