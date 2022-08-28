const getISBN = function(book){
    const identifiers = book.volumeInfo.industryIdentifiers;
    if(!identifiers){
        return undefined;
    }
    return identifiers[0].identifier
}

const getAuthors = function(book){
    const authors = book.volumeInfo.authors;
    if(!authors || authors.length === 0){
        return undefined;
    }else if (authors.length === 1){
        return authors[0];
    }else{
        let authorsString = ""
        for(let i=0; i < authors.length-1; i++){
            authorsString += authors[i] + ",";
        }
        authorsString += authors[authors.length-1];
        return authorsString;
    }
}

const printInfo = function(data){
    data.items.forEach(book => {
        console.log(`${book.volumeInfo.title} by ${getAuthors(book)}, ISBN: ${getISBN(book)}`)
    });

}

const fetch = function(queryType, queryValue){
    const url = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`;
    $.ajax({
        method: "GET",
        url: url,
        success: printInfo,
        error: function(xhr, text, error){
            alert("oops, seems to be an issue with the request!");
        }
    })
}

//test function:
fetch("isbn", 9789814561778);
fetch("title", "How to Win Friends and Influence People");
