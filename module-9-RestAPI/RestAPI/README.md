<H1> 1. CRUD MOVIES </H1>


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
        actors: 
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
                actors: 

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
                actors: 
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
                actors: 
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
        actors: 
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
        actors:
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
        actors:
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
        actors:
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
        actors:
    }

### invalid request
    PUT http://api.movieapp.com/movies/{id which not exist} HTTP/1.1
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
        actors:
    }

### response
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


<H1> 2. CRUD ACTORS </H1>


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
        movies: 
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
                movies:
            },

            {
                id: 
                name: 
                bio:
                birthday:
                deathday:
                gender:
                popularity:
                movies:
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
                movies:
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
        movies:
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
        movies:
    }

### invalid request
    POST http://api.movieapp.com/actors HTTP/1.1
    {
        bio:
        birthday:
        deathday:
        gender:
        popularity:
        movies:
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
        movies:
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
        movies:
    }

### invalid request
    PUT http://api.movieapp.com/actors/{id which not exist} HTTP/1.1
    {
        id: 
        name: 
        bio:
        birthday:
        deathday:
        gender:
        popularity:
        movies:
    }

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

<H1> 3. Get actors of a specific movie </H1>

### request
GET http://api.movieapp.com/mvoies/{id}/actors HTTP/1.1

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
                movies:
            },

            {
                id: 
                name: 
                bio:
                birthday:
                deathday:
                gender:
                popularity:
                movies:
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
                movies:
            }
        ]
    }

<H1> 4. Add an actor to a specific movie </H1>

### request
    PUT http://api.movieapp.com/movies/{id} HTTP/1.1
    {
        id: 
        name: 
        bio:
        birthday:
        deathday:
        gender:
        popularity:
        movies:
    }

### response
    HTTP/1.1 200 Ok
    Content-Type: application/json
    {
        id: 
        name: 
        bio:
        birthday:
        deathday:
        gender:
        popularity:
        movies:
    }

<H1> 5. Remove an actor from a specific movie </H1>

### request
    DELETE http://api.movieapp.com/movies/{id}/actors/{id} HTTP/1.1

### response
    HTTP/1.1 204 Not Contnet

<H1> 6. Get the top 3 stars of a specific movie </H1>

### request
    GET http://api.movieapp.com/movies/{id}/actors?top=3 HTTP/1.1

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
                movies:
            },

            {
                id: 
                name: 
                bio:
                birthday:
                deathday:
                gender:
                popularity:
                movies:
            },

            {
                id: 
                name: 
                bio:
                birthday:
                deathday:
                gender:
                popularity:
                movies:
            }
        ]
    }

<H1> 7. Update a specific movie's revenue </H1>

### request
    PUT http://api.movieapp.com/movies/{id} HTTP/1.1
    {
        id: 
        name: 
        bio:
        birthday:
        deathday:
        gender:
        popularity:
        movies:
    }

### response
    HTTP/1.1 200 Ok
    Content-Type: application/json
    {
        id: 
        name: 
        bio:
        birthday:
        deathday:
        gender:
        popularity:
        movies:
    }

<H1> 8. Get the top 10 action movies </H1>

<H1> 9. Get the drama movies of a specific actor </H1>

### request
    GET http://api.movieapp.com/actors/{id}/movies?genres=drama HTTP/1.1

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
                actors: 

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
                actors: 
            },
            .
            .
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
                actors: 
            }
        ]
    }

<H1> 10. Get the top 3 most popular movies of a specific actor </H1>

### request
    GET http://api.movieapp.com/actors/{id}/movies?top=3 HTTP/1.1

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
                actors: 

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
                actors: 
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
                actors: 
            }
        ]
    }