$("#items").on("click", ".item", function(){
    let isInStock = $(this).data().instock;

    if(isInStock){
        let itemName = $(this).text();
        let alreadyInCart = isInCart(itemName);
        if(alreadyInCart){
            alreadyInCart.data().amount += 1; 
            alreadyInCart.text(`${itemName} - ${alreadyInCart.data().amount}`) 
        }else{           
            let item = `<div class=cart-item data-amount=1>${itemName} - 1</div>`;
            $("#cart").append($(item));
        }
    }
})

$("#cart").on("click", ".cart-item", function(){
    let itemName = $(this).text().split(" - ")[0];
    let amount = $(this).data().amount;
    if(amount == 1){
        $(this).remove();
    }else{
        $(this).data().amount -= 1;
        $(this).text(`${itemName} - ${$(this).data().amount}`);
    }
})

function isInCart(itemName){
    let cartItems = $(".cart-item");
    for(const item of cartItems){
        if($(item).text().split(" - ")[0] === itemName){
            return $(item);
        }
    }
    return undefined;
}