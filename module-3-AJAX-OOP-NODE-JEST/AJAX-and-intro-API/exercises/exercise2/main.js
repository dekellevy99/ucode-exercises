const printInfo = function(data){
    console.log(data.items[0]);

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
