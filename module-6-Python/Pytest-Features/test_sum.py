import pytest

@pytest.mark.sanity
def test_sum1():
  assert 1 + 2 == 3

@pytest.mark.low3
def test_sum2():
  assert 1 + 1 == 2

@pytest.mark.low3
def test_sum3():
  assert 1 + 0 == 1
 
@pytest.mark.sanity
def test_sum4():
  assert 1 + 5 == 6 

@pytest.mark.low3
def test_sum5():
    assert 0 + 2 == 2