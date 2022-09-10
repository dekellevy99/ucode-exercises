#exercise 1 + 2
def longest_string(str1, str2):
    if len(str1) > len(str2):
        return str1
    elif len(str1) == len(str2):
        return "same length"
    return str2

print(longest_string("abc", "ab"))
print(longest_string("ab", "abc"))
print(longest_string("abc", "abc"))

#exercise 3
def is_long_string(str):
    return len(str) > 10

def judge(str1, str2):
    longest_str = longest_string(str1, str2)
    is_long = is_long_string(longest_str)
    if is_long:
        print(f"{longest_str} is a long string")
    else:
        print(f"{longest_str} is a normal string")

judge("shepherd", "cataclysmic")
judge("horse", "cat")