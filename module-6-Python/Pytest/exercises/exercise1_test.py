def add_five(num):
    return num + 5

def test_add_five_1():
    assert add_five(10) == 15, "Test failed! Wrong total when adding regular number with five" 

def test_add_five_2():
    assert add_five(10) == 10, "Test failed! Wrong total when adding regular number with five" 