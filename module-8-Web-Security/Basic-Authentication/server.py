# ================ Authentication based Dependencies ===========================
# from fastapi import Depends, FastAPI
# from fastapi.security import HTTPBasic, HTTPBasicCredentials
# import uvicorn

# app = FastAPI()
# security = HTTPBasic()

# @app.get("/profile")
# async def main(credentials: HTTPBasicCredentials = Depends(security)):
#     return {"name": "John Smith"}
    
# if __name__ == "__main__":
#     uvicorn.run("server:app", host="127.0.0.1", port=8000, log_level="info")


# ================ Authentication based Middleware ===========================

# from typing import Tuple, List
# import uvicorn
# from fastapi import FastAPI
# from starlette.requests import Request
# from starlette.authentication import requires
# from fastapi_auth_middleware import AuthMiddleware, FastAPIUser

# # The method you have to provide
# def verify_authorization_header(auth_header: str) -> Tuple[List[str], FastAPIUser]:
#     user = FastAPIUser(first_name="Code", last_name="Specialist", user_id=1)  # Usually you would decode the JWT here and verify its signature to extract the 'sub'
#     scopes = ["admin"]  # You could for instance use the scopes provided in the JWT or request them by looking up the scopes with the 'sub' somewhere
#     return scopes, user

# app = FastAPI()
# app.add_middleware(AuthMiddleware, verify_header=verify_authorization_header)  # Add the middleware with your verification method to the whole application

# @app.get('/')  # Sample endpoint (secured)
# @requires("admin")
# def home(request: Request):
#     return request.user

# if __name__ == "__main__":
#     uvicorn.run("server:app", host="127.0.0.1", port=8000, log_level="info", reload=True)


# from fastapi import Depends, FastAPI, HTTPException, status
# from fastapi.security import HTTPBasic, HTTPBasicCredentials
# import uvicorn

# app = FastAPI()
# security = HTTPBasic()

# def get_current_username(credentials: HTTPBasicCredentials = Depends(security)):
#     if not (credentials.username == "johnsmith") or not (credentials.password == "swordfish"):
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Incorrect email or password",
#             headers={"WWW-Authenticate": "Basic"},
#         )
    
#     return credentials.username

# @app.get("/profile")
# async def main(username: str = Depends(get_current_username)):
#     return {"username": username}

# if __name__ == "__main__":
#     uvicorn.run("server:app", host="127.0.0.1", port=8000, log_level="info", reload=True)