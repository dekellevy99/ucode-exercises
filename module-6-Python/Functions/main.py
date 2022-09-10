def add(x, y):
    sum = x + y
    if sum > 100:
        print("Whoa")
    else:
        print("You can do better")

add(3,5)
add(3, 99)

def determine_outfit(temperature):
    if temperature > 25:
        return "t-shirt"
    else:
        return "jacket"

outfit = determine_outfit(36)
print(outfit) # outputs: t-shirt

def remove_letter_from_text(text, letter):return "".join(filter(lambda c: c != letter, text))


def encode_text(text):
    return "-".join(map(lambda c: str(ord(c)), text))

def show_encoded_filter(text, letter):
    filterd_text = remove_letter_from_text(text, letter)
    print("filterd text = ", filterd_text)
    encoded_filtered_text = encode_text(filterd_text)
    print("encoded filtered text = ", encoded_filtered_text)
show_encoded_filter("sinusitis", "s")

def determine_biggest(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2

biggest = determine_biggest(91234, 91241)
print("Biggest number is " + str(biggest))