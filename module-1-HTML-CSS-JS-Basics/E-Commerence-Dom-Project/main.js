const products = [{name: "Watch", price: "100$", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"},
                 {name: "Headphone", price: "200$", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"},
                 {name: "Camera", price: "300$", img: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"},
                 {name: "Macbocok", price: "400$", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
                 {name: "Keyboard", price: "400$", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80"}];

const cart = [products[0] ,products[1]]


const renderAboutUs = function(){
    cleanContent();
    const container = document.getElementById("main-content");
    const aboutUsContainer = document.createElement("div");
    aboutUsContainer.setAttribute("id", "about-us-container");
    container.appendChild(aboutUsContainer);

    let img = document.createElement("img");
    img.setAttribute("src", "https://media.istockphoto.com/photos/male-hand-writing-the-word \
    -about-us-on-gray-background-promoting-the-picture-id1301177416?b=1&k=20&m=1301177416&s=170667a&w=0&h=cUCc8ST9CnzZi-1TTkwesHanWmeThlzgH6uNMnyZDgI=")
    aboutUsContainer.appendChild(img);
    
    let content = document.createElement("div");
    content.setAttribute("id", "about-us-content");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                            Porro est nam incidunt laboriosam ut accusantium molestias perspiciatis blanditiis minima, \
                            veniam illo aliquam nihil, dolores consequuntur harum et nostrum! Illum, odio.\
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.\
                            Porro est nam incidunt laboriosam ut accusantium molestias perspiciatis blanditiis minima, \
                            veniam illo aliquam nihil, dolores consequuntur harum et nostrum! Illum, odio.\
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.\
                            Porro est nam incidunt laboriosam ut accusantium molestias perspiciatis blanditiis minima, \
                            veniam illo aliquam nihil, dolores consequuntur harum et nostrum! Illum, odio.\
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.\
                            Porro est nam incidunt laboriosam ut accusantium molestias perspiciatis blanditiis minima,\
                            veniam illo aliquam nihil, dolores consequuntur harum et nostrum! Illum, odio.\
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.\
                            Porro est nam incidunt laboriosam ut accusantium molestias perspiciatis blanditiis minima, \
                            veniam illo aliquam nihil, dolores consequuntur harum et nostrum! Illum, odio."
    content.appendChild(paragraph);
    aboutUsContainer.appendChild(content);
}

const cleanContent = function(){
    const container = document.getElementById("main-content");
    let childNode = container.lastElementChild;
    while(childNode){
        container.removeChild(childNode);
        childNode = container.lastElementChild;
    }
}


const renderProductsPage = function(){
    cleanContent();
    const productsContainer = document.getElementById("main-content");

    let counter = 0;
    for(const product of products){
        let productElem = document.createElement("div");
        productElem.setAttribute("class", "product");
        productElem.setAttribute("id", `product-${counter}`);
        let img = document.createElement("img");
        img.setAttribute("src", product["img"]);
        productElem.appendChild(img);
        
        let descriptionElem = document.createElement("div");
        let descPara = document.createElement("p")
        descPara.innerHTML = product["name"] + ": " + product["price"]; 
        descriptionElem.appendChild(descPara);
        let icon = document.createElement("button");
        icon.onclick = addToCart;
        icon.innerHTML = "+";
        descriptionElem.appendChild(icon);
        
        productElem.appendChild(descriptionElem);
        productsContainer.appendChild(productElem); 
        counter++;
    }

}

const renderCartPage = function(){
    cleanContent();
    const productsContainer = document.getElementById("main-content");

    let counter = 0;
    for(const product of cart){
        let productElem = document.createElement("div");
        productElem.setAttribute("class", "product");
        productElem.setAttribute("id", `product-${counter}`);
        let img = document.createElement("img");
        img.setAttribute("src", product["img"]);
        productElem.appendChild(img);
        
        let descriptionElem = document.createElement("div");
        let descPara = document.createElement("p")
        descPara.innerHTML = product["name"] + ": " + product["price"]; 
        descriptionElem.appendChild(descPara);
        let icon = document.createElement("button");
        icon.onclick = removeFromCart;
        icon.innerHTML = "-";
        
        descriptionElem.appendChild(icon);
        
        productElem.appendChild(descriptionElem);
        productsContainer.appendChild(productElem); 
        counter++;
    }
}

const addToCart = function(){
    let productElem = this.closest("div").parentNode;
    let productId = productElem.getAttribute("id");
    let productIdx = parseInt(productId.split("-")[1]);
    cart.push(products[productIdx]);
}

const removeFromCart = function(){
    let productElem = this.closest("div").parentNode;
    let productId = productElem.getAttribute("id");
    let productIdx = parseInt(productId.split("-")[1]);
    cart.splice(productIdx, 1);
    renderCartPage();
}