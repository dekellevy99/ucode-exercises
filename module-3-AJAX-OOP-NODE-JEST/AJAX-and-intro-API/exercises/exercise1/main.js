const printInfo = function(data){
    console.log(data.items[0]);

}

const fetch = function(isbn){
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
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
fetch(9782806269171);
fetch(1440633908);
fetch(9781945048470);
fetch(9780307417138);
