let mainDiv = "<div id=main-div></div>";
$("body").append($(mainDiv));

let ul = "<ul id=human-list></ul>";
$("#main-div").append($(ul));

let input = "<input type=text placeholder=Name>";
$("#main-div").append($(input));

let btn = "<button> Add Human </button>";
$("#main-div").append($(btn));

$("button").on("click", function(){
    let humanName = $("input").val();
    if(humanName.length > 0){
        let li = `<li> ${humanName} </li>`;
        $("#human-list").append($(li));
        $("input").val("");
    }
})