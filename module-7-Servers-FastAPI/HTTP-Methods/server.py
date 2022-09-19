from fastapi import FastAPI
from fastapi import Request
import uvicorn

app = FastAPI()
global_id = 1

wonders = [
    {
        "ID":1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]

@app.get('/')
def root():
    return {"message":"Server is up and running"}


@app.get("/wonders/{id}")
def get_wonder_by_id(id):
    for wonder in wonders:
        if wonder["ID"] == int(id):
            return wonder["name"]
    return None


@app.post('/wonders',status_code=201)
async def create_wonder(request: Request):
    global global_id
    res = await request.json()
    global_id += 1
    new_wonder = {"ID": global_id, "name": res["name"], "location": res["location"]}
    print(new_wonder)
    wonders.append(new_wonder)
    return "Created"


@app.put("/wonders/{id}")
async def items(id ,request: Request):
    res = await request.json()
    name = res["name"]
    location = res["location"]
    print(id)
    print(f"name: ${name}, location ${location}")
    return "done"

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)