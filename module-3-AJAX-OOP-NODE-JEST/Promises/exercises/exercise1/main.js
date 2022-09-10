$.get("https://random-word-api.herokuapp.com/word")
    .then(function(word){
        return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`);
    })
    .catch(function(error){
        console.log("Seems to be an issue with the request.")
    })
    .then(function(books){
        let bookTitle = books.items[0].volumeInfo.title;
        console.log(bookTitle)
    })
    .catch(function(error){
        console.log("Seems to be an issue with the request.")
    })
