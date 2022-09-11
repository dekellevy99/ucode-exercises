#exercise 1 - to upper
def to_upper(c):
    if (ord(c)>= 97) and (ord(c) <= 122):
        return chr(ord(c) - 32)
    return c


def upper(s):
    upper_str = ""
    for c in s:
        upper_str += to_upper(c)
    return upper_str

print(to_upper("d"))
print(to_upper("Q"))
print(to_upper("!"))

print(upper("I love Python!"))    # "I LOVE PYTHON!" 


#exercise 2 - Unicode Encryption
def encode(msg):
    return "-".join([str(b) for b in msg.encode("ascii")])


def decode(msg):
    return "".join([chr(int(b)) for b in msg.split("-")])

print(encode("Hello"))
print(decode(encode("Hello")))


#exercise 3 - Word Value
def get_word_value(word):
    sum = 0
    for c in word:
        sum += ord(c)-96
    return sum

print(get_word_value("day"))


#exercise 4 - Caesar Cipher
def caesar_encode(msg, n):
    caesar_msg = ""
    for c in msg:
        if(ord(c) + n > 90):
            caesar_msg += chr((ord(c) + n) - 90 + 64)
        else:
            caesar_msg += chr(ord(c) + n)
    return caesar_msg


def caesar_decode(msg, n):
    caesar_msg = ""
    for c in msg:
        if(ord(c) - n < 65):
            caesar_msg += chr(91 - (65-(ord(c) - n)))
        else:
            caesar_msg += chr(ord(c) - n)

    return caesar_msg


print(caesar_encode("ABXYZ", 3))
print(caesar_decode("DEABC", 3))


#exercise 5 - Convert string-number to int
def string_number_to_int(string):
    num = 0
    for char in string:
        if(ord(char) >= 48 and ord(char) <= 57):
            num = num * 10 + (ord(char) - 48)
        else:
            raise ValueError("input should be digits only")
    return num

print(string_number_to_int("123"))