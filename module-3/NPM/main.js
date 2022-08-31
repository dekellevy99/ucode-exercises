$("#small-div").on("click", function(){
    $(this).css("background-color", "#f39c12")
})

$.ajax({
    url: "http://data.nba.net/10s/prod/v1/2016/players.json",
    method: "GET",
    success: function(response){
        console.log(response)
    },
    error: function(xvr, text, error){
        console.log("seems to be an issue with this request");
    }
})

const { request } = require('urllib');

async function run(){
    const { data, res } = await request('http://data.nba.net/10s/prod/v1/2016/players.json');
    console.log(data.toString())
}
run()