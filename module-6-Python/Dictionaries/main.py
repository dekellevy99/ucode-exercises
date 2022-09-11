user = {
    "name": "Karolin",
    "username": "ksmart3",
    "age": 27,
    "has_purchased": False
}

print(user["name"] + " is " + str(user["age"]) + " years old.")
# outputs: Karolin is 27 years old.

print(user.get("name") + " is " + str(user.get("age")) + " years old.")

fridge = {"milk": 3, "bananas": 4, "juice": 2}
if fridge.get("milk") == 1:
    print("There is one bottle of milk left")
else:
    print("There are " + str(fridge["milk"]) + " bottles of milk left")

closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}

print(closet["shirts"]["white"])
print(closet["pants"]["shorts"]["flamingo-pink"])
closet["pants"]["jeans"]["organic"] = 7
closet["pants"]["jeans"]["denim"] -= 4
short_flamingo_pink = closet["pants"]["shorts"]["flamingo-pink"]
shirts_flamingo_pink = closet["shirts"]["flamingo-pink"]
if short_flamingo_pink > shirts_flamingo_pink:
    print("bottom")
else:
    print("top")
    
student = {
    "name": "koko",
    "age": 42,
    "level": "A"
}

deleted = student.pop("level")
print(deleted)

del student["age"]
print(student)

person = {
    "name": "koko",
    "age": 17,
    "is vegan": True
}

for key,value in person.items():
    print(key, value)

for pair in person.items():
    print(pair)

names = ["koko", "momo", "bobo"]


result = {"name" + str(i): v for i,v in enumerate(names)}
print(result)

def get_squares_dictionary(number):
    squares_dict = {num: num**2 for num in range(1, number+1)}
    return squares_dict

print(get_squares_dictionary(5))