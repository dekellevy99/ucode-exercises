$(".remove").on("click", function(){
    alert($(this).closest(".post").data().id)
})

$(".submit-data").on("click", function(){
    let input = $(this).closest("div").find("input").val();
    alert(input);

})

$("button").on("click", function(){
    let contentSpan = $(this).closest("div").find("span").text();
    alert(contentSpan);
})

$("#btn").on("click", function(){
    let p = $("body").find("div").find("p").text();

    alert(p);
})