store = [
    { "name": "table", "inventory": 3, "price": 800 },
    { "name": "chair", "inventory": 16, "price": 120 },
    { "name": "couch", "inventory": 1, "price": 1200 },
    { "name": "picture frame", "inventory": 31, "price": 70 }
]


def get_item_by_name(item_name):
    for item in store:
        if item["name"] == item_name:
            return item
    return None


def get_item_price(item_name):
    item = get_item_by_name(item_name)
    return item["price"] if item != None else None


def buy_item(item_name):
    item = get_item_by_name(item_name)
    if item != None and item["inventory"] > 0:
        item["inventory"] -= 1
        return {"status": True, "item": item_name, "inventory": item["inventory"], "price": item["price"]}
    return {"status": False}


def admin_sale(discount):
    for item in store:
        if item["inventory"] > 10:
            item["price"] = (discount * item["price"]) / 100
    return store