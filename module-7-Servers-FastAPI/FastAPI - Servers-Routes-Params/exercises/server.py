from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import uvicorn
import store

DISCOUNT_PERCENTAGE = 50

app = FastAPI()
app.mount("/static", StaticFiles(directory="./static"), name="static")


@app.get("/")
def route():
    return "Server is up and running smoothly"


@app.get("/products/{item_name}")
def get_item_price(item_name):
    price = store.get_item_price(item_name)
    return {"price": price}


@app.get("/buy/{item_name}")
def buy_item(item_name):
    purchase_status = store.buy_item(item_name)
    return purchase_status


@app.get("/sale")
def admin_sale(admin):
    if admin == "true":
        return store.admin_sale(DISCOUNT_PERCENTAGE)
    else:
        return store.store


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)