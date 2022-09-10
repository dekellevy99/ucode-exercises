let widsom = JSON.parse(localStorage.widsom || "[]");
let id = JSON.parse(localStorage.id || "0")


const renderContent = function(){
    $("#content").empty();
    for(const text of widsom){
        $("#content").append(`<span>${text.text}</span>
                                <span class=delete-text data-id=${text.id}> x </span><br>`)
    }
}

$("#btn").on("click", function(){
    let text = $("#input").val();
    if(text.length > 0){
        widsom.push({text: text, id: id})
        id += 1;
        renderContent();
        $("#input").val("");
        if(widsom.length % 2 == 0){
            localStorage.widsom = JSON.stringify(widsom);
        }
    }
})

$("#clear-btn").on("click", function(){
    localStorage.clear();
    widsom.splice(0, widsom.length);
    $("#content").empty();
})

$("#content").on("click", ".delete-text", function(){
    let id = $(this).data().id;
    widsom = widsom.filter(w => {return w.id != id});
    localStorage.widsom = JSON.stringify(widsom);
    renderContent();
})



renderContent();