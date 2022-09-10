money_in_bank = 300
transfer_amount = 50

if transfer_amount <= money_in_bank:
    print("Execute transfer")

age = 20
minimum_age = 16

if age >= minimum_age:
    print("Come in")
else:
    print("Get Out")

username = "dani"
correct_username = "dani10"

if username != "":
    if username == correct_username:
        print("Welcome " + username)
    else:
        print("incorrect username")
else:
    print("please enter a username")


salary = 1000
good_bonus = 300
stellar_bonus = 500
performance = "stellar" # you decide: "stellar" or "good"

if(performance == "stellar"):
    salary += stellar_bonus
elif performance == "good":
    salary += good_bonus
else:
    print("no bounus")

num = 10
message = "num > 80" if num > 80 else "num <= 80"
print(message)