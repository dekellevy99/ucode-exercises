import json

with open("pokemon.json") as pokemon_file:
    pokemon_data = json.load(pokemon_file)

print(pokemon_data)

#exercise 1 - pokemon data
pokemon_data = list(map(lambda p: {"id": p["id"],
                                   "name": p["name"],
                                   "type": p["type"],
                                   "weight": p["weight"],
                                   "height": p["height"],
                                   "weaknesses": p["weaknesses"]}, pokemon_data))

#exercise 2 - pokemon names
pokemon_names = list(map(lambda p: p["name"], pokemon_data))
print(pokemon_names)

#exercise 3 - strong pokemon
heavy_pokemon = list(filter(lambda p: p["weight"] > 100, pokemon_names))
print(heavy_pokemon)

#exercise 4 - Water Pokemon
water_pokemon = list(filter(lambda p: p["name"],
                                filter(lambda p: "Water" in p["weakness"], pokemon_data)))