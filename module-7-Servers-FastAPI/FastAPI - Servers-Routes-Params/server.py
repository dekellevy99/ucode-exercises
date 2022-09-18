from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import requests



app = FastAPI()

@app.get('/')
def root():
    return FileResponse('./static/download.txt')


@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"


@app.get("/landing/{username}")
async def greet_user(username):
    return {"message":"Hi there {}".format(username)}


@app.get("/optionalParameters")
async def query_params(name, age):
    return {"message":"Hi there {} you are {} years old".format(name, age)}


@app.get("/book/{name}")
async def get_book(name):
    res = requests.get('https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
    return res.json()


app.mount("/static", StaticFiles(directory="./static"), name="static")


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8080, reload=True)