my_list = ["I", 2, "Love", 4, 56, "Coding", "Python", "in", [8,9,10]]

def test_number():
  assert (3 in my_list) == False, "Test failed! Wrong result when checking if 3 in the list" 
  assert (56 in my_list) == True, "Test failed! Wrong result when checking if 56 in the list" 
  

def test_str():
    strings_to_check = ["I", "Love", "Coding"]
    for word in strings_to_check:
        assert (word in my_list) == True, f"Test failed! Wrong result when checking if {word} in the list" 
  

def test_upper_str():
    for elem in my_list:
        if type(elem) == str:
            assert elem.isupper() == True, f"Test failed! Wrong result, {elem} isn't upper" 

def test_negative():
    assert (6 in my_list) == False, "Test failed! wrong result when checking if 6 is in the list "