const buttons = $("span")

for(const button of buttons){
    $(button).addClass("picker");
    let backgroundColor = $(button).data().color;
    $(button).css("background-color", backgroundColor);
    
    $(button).on("click", function(){
        $(".box").css("background-color", backgroundColor);
    }) 
}