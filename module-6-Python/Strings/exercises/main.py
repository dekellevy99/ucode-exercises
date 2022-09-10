#exercise 1
word = "protocol"
if len(word) < 4:
    print("")
else:
    print(word[:2] + word[-2:])

#exercise 2
first_string = "Hey"
second_string = "You"
result_string = second_string[0] + first_string[1:] + " " + first_string[0] + second_string[1:]
print(result_string)

#exercise 3
string = "boo boo boo too ta da"
result = string.replace("oo", "u", 2)
print(result)

#extension
word = "ArYnjTdsV"
print("".join(sorted(word)[::-1]))

word = "aGUiLSCMepk"
smaller = [l for l in word if l.lower() < "m"]
bigger = [l for l in word if l.lower() >= "m"]
res = "".join(sorted(smaller, key=str.lower) + sorted(bigger, reverse=True, key=str.lower))
print(res)