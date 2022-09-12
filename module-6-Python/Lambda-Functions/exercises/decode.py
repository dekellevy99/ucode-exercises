#exercise decode
code = {
    "0": "A",
    "1": "E",
    "2": "O",
    "3": "U",
    "4": "G",
    "5": "R",
    "6": "T",
    "7": "U",
    "8": "Y"
}

def decode(message):
    return "".join(list(map(lambda c: code[c], message)))

encrypted_message = "82705145106"
print(decode(encrypted_message))
