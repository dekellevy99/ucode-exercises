$.get("https://random-word-api.herokuapp.com/word")
    .then(function(word){
        let bookPromise = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`);

        let apiKey = "DYWuy6AUH5XdQrbc3f33OsEDW2DIGdmO";
        let gifPromise = $.get(`https://api.giphy.com/v1/gifs/search?q=${word}&api_key=${apiKey}`);
        Promise.all([bookPromise, gifPromise])
            .then(function(results){
                console.log(results[0])
                console.log(results[1])
                let bookTitle = results[0].items[0].volumeInfo.title;
                let gif = results[1].data[0].embed_url;

                $("body").append(`<h1>${bookTitle}</h1`)
                $("body").append(`<iframe src=${gif}></iframe>`)
            })
    })
    .catch(function(error){
        console.log("Seems to be an issue with the request.")
    })