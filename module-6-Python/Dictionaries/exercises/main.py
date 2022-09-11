#exercise 1
state = "France"

heads_of_states = {
    "Italy": {
        "president": "Sergio Mattarella",
        "prime minister": "Giuseppe Conte"
    },
    "India": {
        "president": "Ram Nath Kovind",
        "prime minister": "Narendra Modi"
    },
    "France": {
        "president": "Emmanuel Macron",
        "prime minister": "Edouard Philippe"
    }
}

print("The president of " +  state + " is " + heads_of_states[state]["president"] + " and the prime minister is " + heads_of_states[state]["prime minister"])

#exercise 2
user_id = 3058
bonus_months = 3

user_months = {
    1552: 18,
    7021: 2,
    532: 12,
    3058: 9,
    1102: 4
}

print("Giving user " + str(user_id) + " an extra " + str(bonus_months) + " month bonus")
user_months[user_id] += bonus_months
print(user_months[user_id])

#exercise 3
country_populations = {}
country_populations.update({"Ghana": 28, "Brazil": 209, "Mongolia": 3})
country = "Brazil"
size = "big" if country_populations[country] > 50 else "small"
print(f"{country} is {size} country")


#exercise 4
tomato = "Tomato Soup"
onion = "Onion Soup"
carrot = "Carrot Soup"

user_preferences = {
    "Sarah": tomato,
    "Sheila": carrot,
    "Fernando": tomato,
    "Jovan": onion,
    "Simona": carrot
}

soup_recipes = {
    tomato: "Get a bunch of tomatoes, cut them up, and throw them in boiling water",
    onion: "Be prepared to cry",
    carrot: "Find a rabbit, ask him how to make a carrot soup"
}

user = "Sarah"
print(soup_recipes[user_preferences[user]])