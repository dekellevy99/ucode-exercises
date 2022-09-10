#exercise 1
is_VIP = False
cash = 500

if is_VIP or cash >= 500:
    print("Come on in")
else:
    print("Get Out")

#exercise 2
name = "John"

singer = "Lennon"
president = "Kennedy"
actor = "Travolta"

profession = "singer" # you decide which string: 'singer', 'president', or 'actor'

if profession == "singer":
    name += " " + singer
elif profession == "president":
    name += " " + president
elif profession == "actor":
    name += " " + actor

print(name)

#xercise 3
bought_tesla = True
year_of_tesla_purchase = 2015
is_US_citizen = True
current_year = 2018

if bought_tesla:
    if is_US_citizen:
        if current_year - year_of_tesla_purchase <= 4:
            print("Are you satisfied?")
        else:
            print("Would you like an upgrade?")
    else:
        print("Would you like to move to the US?")
else:
    print("Would you be interested in buying one?")