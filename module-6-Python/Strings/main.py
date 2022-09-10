moto = "It’s weird not to be weird"
print(moto.split(" "))


delimiter = '*'
print(delimiter.join(['S', 'T', 'A', 'R', 'S']))

adjective = "sweet"
another_adjective = "wonderful"
noun = "world"


greeting = "Hello to my {} and {} {}".format(adjective, another_adjective, noun)
more_easy_formating = f"Hello to my {adjective} and {another_adjective} {noun}"
print(greeting)
print(more_easy_formating)
greeting = f"Hello to my {adjective.upper()} and {'-'.join(list(another_adjective))} {noun}"
print(greeting)