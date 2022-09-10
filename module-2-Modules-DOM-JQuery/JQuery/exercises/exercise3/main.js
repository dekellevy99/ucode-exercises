let firstBox = "<div id=first class=box></div>";
let secondBox = "<div id=second class=box></div>";

$("body").append($(firstBox))
$("body").append($(secondBox))

$("#first").hover(function(){
    $("#second").css("background-color", "red");
})

$("#second").hover(function(){
    $("#first").css("background-color", "red");
})