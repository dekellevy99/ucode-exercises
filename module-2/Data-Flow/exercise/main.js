const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]

const render = function(){
    $("#posts-frame").empty();
    for(const post of posts){
        let name = post.name;
        let text = post.text;

        let postElem = $(`<div class=post>
                            <p class=name> ${name}: </p>
                            <p class=text> ${text} </p>
                        </div>`);
        
        $("#posts-frame").append(postElem)
    }
}

$("#post-btn").on("click", function(){
    let name = $("#name").val();
    let text = $("#wish").val();
    if(name.length > 0 && text.length > 0){
        posts.push({name: name, text: text});
        render();

    }
})

render()