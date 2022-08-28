const gif = function(input){
    let apiKey = "DYWuy6AUH5XdQrbc3f33OsEDW2DIGdmO";

    const url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}`
    $.ajax({
        method: "GET",
        url: url,
        success: function(response){
            $("#gif").attr("src", response.data[0].embed_url);
        },
        error: function(xhr, text, error){
            alert("oops, seems to be an issue with the request!");
        }
    })
}

gif("cat")