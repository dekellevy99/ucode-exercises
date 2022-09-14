import pytest

@pytest.fixture
def store():
    items = ("apple", "banana", "orange")
    amount = (2, 2, 1)
    print(zip(items, amount))
    return dict(zip(items, amount)) 

def buy_banana(store):
    store["banana"] -= 1

def buy_two_bananas(store):
    store["banana"] -= 2

# == tests ==
def test_buy_banana(store):
    buy_banana(store)
    assert store["banana"] == 1, "Test Failed, amount of banan is not updated correctly"

def test_buy_two_bananas(store):
    buy_two_bananas(store)
    assert store["banana"] == 0, "Test Failed, amount of banan is not updated correctly"


