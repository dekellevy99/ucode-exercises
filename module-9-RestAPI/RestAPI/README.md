<H1> ===== CRUD MOVIES ==== </H1>


### valid request
    GET http://api.movieapp.com/movies/{id} HTTP/1.1

### response
    HTTP/1.1 200 Ok
    {
        id: 
        title:
        plot:
        poster:
        budget:
        revenue:
        genres:
        popularity:
        review:
        runtime:
    }

### invalid request
    GET http://api.movieapp.com/movies/{id which not exist} HTTP/1.1

### response
    HTTP/1.1 404 Not Found
    Content-Type: application/json
    {
        "error": "Invalid Id - does't exist" 
    }
 
--------------------------------------------------------------------------------------
### valid request
    GET http://api.movieapp.com/movies?offset=20&limit=20 HTTP/1.1

### response
    HTTP/1.1 200
    {
        [
            {
                id:
                title:
                plot:
                poster:
                budget:
                revenue:
                genres:
                popularity:
                review:
                runtime:
            },

            {
                id:
                title:
                plot:
                poster:
                budget:
                revenue:
                genres:
                popularity:
                review:
                runtime:
            }
            .
            . up to 20 records.
            .
            {
                id:
                title:
                plot:
                poster:
                budget:
                revenue:
                genres:
                popularity:
                review:
                runtime:
            }
        ]
    }

--------------------------------------------------------------------------------------
### valid request
    POST http://api.movieapp.com/movies HTTP/1.1
    {
        title:
        plot:
        poster:
        budget:
        revenue:
        genres:
        popularity:
        review:
        runtime:
    }

### response
    HTTP/1.1 201 Created
    Content-Type: application/json
    Location: api.movieapp.com/movies/{id}
    {
        id: 
        title:
        plot:
        poster:
        budget:
        revenue:
        genres:
        popularity:
        review:
        runtime:
    }

### invalid request
    POST http://api.movieapp.com/movies HTTP/1.1
    {
        plot:
        poster:
        budget:
        revenue:
        genres:
        popularity:
        review:
        runtime:
    }

### response
    HTTP/1.1 400 Bad Request
    Content-Type: application/json
    {
        "error": "Invalid data", 
        "details": {
            "title": "required"
        }
    }

--------------------------------------------------------------------------------------

### valid request
    PUT http://api.movieapp.com/movies/{id} HTTP/1.1
    {
        id: 
        title:
        plot:
        poster:
        budget:
        revenue:
        genres:
        popularity:
        review:
        runtime:
    }

### response
    HTTP/1.1 200
    Content-Type: application/json
    {
        id: 
        title:
        plot:
        poster:
        budget:
        revenue:
        genres:
        popularity:
        review:
        runtime:
    }

### invalid request
    PUT http://api.movieapp.com/movies/{id which not exist} HTTP/1.1
    HTTP/1.1 404 Not Found
    Content-Type: application/json
    {
        "error": "Invalid Id - does't exist" 
    }

--------------------------------------------------------------------------------------
### valid request
    DELETE http://api.movieapp.com/movies/{id} HTTP/1.1

### response
    HTTP/1.1 204 Not Content

### invalid request
    DELETE http://api.movieapp.com/movies/{id which not exist} HTTP/1.1

### response
    HTTP/1.1 404 Not Found
    Content-Type: application/json
    {
        "error": "Invalid Id - does't exist" 
    }

--------------------------------------------------------------------------------------


<H1> ===== CRUD ACTORS ==== </H1>


### valid request
    GET http://api.movieapp.com/actors/{id} HTTP/1.1

### response
    HTTP/1.1 200 Ok
    {
        id: 
        name: 
        bio:
        birthday:
        deathday:
        gender:
        popularity:
    }

### invalid request
    GET http://api.movieapp.com/actors/{id which not exist} HTTP/1.1

### response
    HTTP/1.1 404 Not Found
    Content-Type: application/json
    {
        "error": "Invalid Id - does't exist" 
    }
 
--------------------------------------------------------------------------------------
### valid request
    GET http://api.movieapp.com/actors?offset=20&limit=20 HTTP/1.1

### response
    HTTP/1.1 200
    {
        [
            {
                id: 
                name: 
                bio:
                birthday:
                deathday:
                gender:
                popularity:
            },

            {
                id: 
                name: 
                bio:
                birthday:
                deathday:
                gender:
                popularity:
            }
            .
            . up to 20 records.
            .
            {
                id: 
                name: 
                bio:
                birthday:
                deathday:
                gender:
                popularity:
            }
        ]
    }

--------------------------------------------------------------------------------------
### valid request
    POST http://api.movieapp.com/actors HTTP/1.1
    {
        name: 
        bio:
        birthday:
        deathday:
        gender:
        popularity:
    }

### response
    HTTP/1.1 201 Created
    Content-Type: application/json
    Location: api.movieapp.com/actors/{id}
    {
        id: 
        name: 
        bio:
        birthday:
        deathday:
        gender:
        popularity:
    }

### invalid request
    POST http://api.movieapp.com/actors HTTP/1.1
    {
        bio:
        birthday:
        deathday:
        gender:
        popularity:
    }

### response
    HTTP/1.1 400 Bad Request
    Content-Type: application/json
    {
        "error": "Invalid data", 
        "details": {
            "name": "required"
        }
    }

--------------------------------------------------------------------------------------

### valid request
    PUT http://api.movieapp.com/actors/{id} HTTP/1.1
    {
        id: 
        name: 
        bio:
        birthday:
        deathday:
        gender:
        popularity:
    }

### response
    HTTP/1.1 200
    Content-Type: application/json
    {
        id: 
        name: 
        bio:
        birthday:
        deathday:
        gender:
        popularity:
    }

### invalid request
    PUT http://api.movieapp.com/actors/{id which not exist} HTTP/1.1

### response
    HTTP/1.1 404 Not Found
    Content-Type: application/json
    {
        "error": "Invalid Id - does't exist" 
    }

--------------------------------------------------------------------------------------
### valid request
    DELETE http://api.movieapp.com/actors/{id} HTTP/1.1

### response
    HTTP/1.1 204 Not Content

### invalid request
    DELETE http://api.movieapp.com/actors/{id which not exist} HTTP/1.1

### response
    HTTP/1.1 404 Not Found
    Content-Type: application/json
    {
        "error": "Invalid Id - does't exist" 
    }

--------------------------------------------------------------------------------------

<H1> ===== Get Actors Of Specific Movie ==== </H1>
