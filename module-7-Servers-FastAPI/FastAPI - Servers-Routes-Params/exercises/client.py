import requests
import sched, time


def get_item_price(item_name):
    res = requests.get(f"http://localhost:8000/products/{item_name}").json()
    if res["price"] is None:
        raise ValueError(f"{item_name} is not a valid item")
    return res["price"]


def can_afford(item_name, budget): 
    price = get_item_price(item_name)
    return price <= budget


def perform_purchase(item_name, budget):
    purchase = requests.get(f"http://localhost:8000/buy/{item_name}").json()
    if purchase["status"]:
        price = purchase["price"]
        inventroy = purchase["inventory"]
        print(f"Congratulations, you've just bought {item_name} for {price}. There are {inventroy} left now in the store")
        budget -= price
    else:
        print("Unfortunately this item isn't available")
    return budget


def buy_item(item_name, budget):
    try:
        can_buy = can_afford(item_name, budget)
        if can_buy:
            budget = perform_purchase(item_name, budget)
        else:
            print("You should find a job.")

    except ValueError:
        print(f"Error: {item_name} isn't a valid item")
    
    return budget


def check_chair(sc, previos_price):
    price = get_item_price("chair")
    print("price = ", price)
    if previos_price != None and price < previos_price:
        requests.get("http://localhost:8000/buy/chair").json()
        print("bought a chair for less")
    else:
        sc.enter(3, 1, check_chair, (sc, price))

s = sched.scheduler(time.time, time.sleep)
s.enter(3, 1, check_chair, (s, None))
s.run()