from fastapi import FastAPI
from fastapi import Request, Response
import uvicorn
import string


word_counter = {"stam": 2}


app = FastAPI()

def set_str(str_):
    return str_.translate(str.maketrans('', '', string.punctuation)).lower()


@app.get("/")
def root():
    return "Server is up and running"


@app.get("/sanity")
def sanity():
    return "Sanity check"


@app.get("/words/{word}")
def get_word(word):
    word = set_str(word)
    count = word_counter[word] if word in word_counter else 0
    return {"count": count}


@app.get("/most_popular/{num}")
def get_most_popular(num):
    num = min(int(num), len(word_counter))
    most_popular = sorted(word_counter, key=word_counter.get, reverse=True)[:num]
    res = []
    for word in most_popular:
        res.append({word: word_counter[word]})
    
    return {"ranking": res}


@app.get("/sum")
def get_sum():
    sum = 0
    for _, count in word_counter.items():
        sum += count
    return {"sum": sum}


@app.post("/words")
async def add_word(request: Request):
    req = await request.json()
    word = set_str(req["word"])
    if word in word_counter:
        word_counter[word] += 1
    else:
        word_counter[word] = 1

    return {"text": f"Added {word}", "currentCount": word_counter[word]}


@app.post("/sentences")
async def add_sentence(request: Request):
    req = await request.json()
    sentence = set_str(req["sentence"])
    num_new_words = 0
    num_old_words = 0
    for word in sentence.split(" "):
        if word in word_counter:
            word_counter[word] += 1
            num_old_words += 1
        else:
            word_counter[word] = 1
            num_new_words += 1
    
    return {"text": f"Added {num_new_words} words, {num_old_words} already existed"}


@app.delete("/words")
async def delete_word(request: Request, response: Response):
    req = await request.json()
    word = set_str(req["word"])
    if word in word_counter:
        count = word_counter.pop(word)
        return {"text": f"{word} deleted.", "count": count}
    else:
        response.status_code = 404
        return {"text": "failed, doesn't exist"}



if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)