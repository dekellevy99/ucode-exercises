let p = $.get('/randomWord') //notice that we don't use a callback in this case! We can, but this is what we're avoiding.


p.then(function (word) {
    console.log(p.state())
    console.log(word)
})

//chaining promises
$.get('/randomWord')
    .then(function (word) {
        return $.get(`/synonyms/${word}`)
    })
    .then(function (synonyms) {
        console.log(synonyms)
    }) 

//chaining promises with handling errors
$.get('/randomWord')
    .then(function (word) {
        return $.get(`/synonyms/${word}`)
    })
    .catch(function (error) { console.log(error) })
    .then(function (synonyms) {
        console.log(synonyms)
    })
    .catch(function (error) { console.log(error) }) 

//Promise.all
$.get('/randomWord')
    .then(function (word) {
        let synonymsPromise = $.get(`/synonyms/${word}`)
        let sentimentPromise = $.get(`/sentiment/${word}`)
        Promise.all([synonymsPromise, sentimentPromise])
            .then(function (results) {
                console.log(results)
            })
    }) 