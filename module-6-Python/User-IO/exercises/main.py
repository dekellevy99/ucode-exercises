from random import uniform

exchange_rate = uniform(3.5, 5.5)
amount_of_shekels = float(input("Enter the number of Shekels: "))
amount_of_euros = amount_of_shekels // exchange_rate

print(f"The amount of euros after the converting is {amount_of_euros}. The exchange rate is {exchange_rate}")