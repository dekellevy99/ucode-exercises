import pytest


def anagram(str1, str2):
    return "".join(sorted(str2)) == "".join(sorted(str1))


inputs = [("elbow", "below", True),
          ("meteor", "remote", True),
          ("adc", "cde", False)]
@pytest.mark.parametrize("str1, str2, is_anagram", inputs)
def test_anagram(str1, str2, is_anagram):
    assert anagram(str1, str2) == is_anagram, f"Test Failed according to {str1} and {str2} which is {is_anagram}"