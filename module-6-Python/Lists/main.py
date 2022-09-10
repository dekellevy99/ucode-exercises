modern_billionaires = ["Jeff Bezos", "Bill Gates", "Mark Zuckerberg", "Warren Buffett"]
modern_billionaires[2] = "Elon Musk"

print(modern_billionaires)
modern_billionaires.append("You")

print(modern_billionaires) 
nums = [1,3,4]
nums.insert(1, 2)
print(nums)

stuff = []
stuff.insert(0, "Cheese")
stuff.append("Castle")
stuff.insert(1, "Curtain")
print(stuff)

new_thing = "My Thing"
if new_thing in stuff:
    print("That's already in there")
else:
    stuff.append(new_thing)
print(stuff)

mylst = [1,2,3,4,5,6,7,8,9]
print(mylst[-1: -10: -1])

original = [2, 4, 6, 8, 10, 12, 14]

bigger_than_8 = [x for x in original if x > 8]
print(bigger_than_8)