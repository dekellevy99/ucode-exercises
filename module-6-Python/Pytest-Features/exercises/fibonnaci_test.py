import pytest


def get_fibo_num(index):
    if index == 0 or index == 1:
        return index
    return get_fibo_num(index-1) + get_fibo_num(index-2)

input = [(0, 0), (1, 1), (6, 8), (9, 34)]

@pytest.mark.parametrize("index, result", input)
def test_get_fibo_num(index, result):
    assert get_fibo_num(index) == result, f"Test Failed! computing the Fibo({index}) should be {result}"