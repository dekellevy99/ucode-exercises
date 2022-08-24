// const header = $("#header");
// console.log(header);
// console.log($);

// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector 
//         return document.getElementById(elementId)
//     }
// }

// console.log($("h4"));
// $("h4").css("color", "red")

// $("h1").css("color", "blue")
// $(".red-div").css("background-color", "red");

// $("li:first-child").css("background-color", "green");
// $("li:nth-child(2)").css("background-color", "pink");

// $("#brown-div").css("background-color", "brown");

// $("#first-box").addClass("box");
// $("#second-box").addClass("box");
// $('#my-input').val('Terabyte');

// console.log($("#item").data());
// console.log($("#item").data().barcode);
// console.log($("#item").data().expirationdate);
// console.log($("#item").data().otherelem);

// const box = $("#hover-box");

// box.on("mouseenter", function(){
//     box.css("background-color", "yellow")
// })

// box.hover(function(){
//     box.css("background-color", "green")
// })

// const button = $("button");
// button.on("click", function(){
//     let val = $("#my-input").val();
//     alert(val);
// })

// $("#b1").hover(function () {
//     console.log((this))
// })


// $(".box").hover(function(){
//     $(this).css("background-color", "blue")
// })


// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)
// $("body").append(elem)


// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')

// $(".feedme").on("click", function(){
//     let divCpy = `<div class=freed-me> ${$(this).text()} </div>`;
//     $("body").append($(divCpy))
//   })

//   const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]

//   for(fullName of names){
//     let div = `<div> ${fullName["first"]} ${fullName["last"]} </div>`;
//     $("body").append($(div))
//   }


//   $("#text").hover(function(){
//     $(this).remove();
//   })




// $("#btn").on("click", function(){
//     let newPost = "<div class=blog> bla bla bla </div>";

//     $("#blogs").append($(newPost))
//     $(".blog").on("click", function(){
//         $(this).text("rrrr");
//     })
// })

  
// const addDiv = function() {
//     $("body").append("<div class=box></div>");
//   };
  
//   $("button").on("click", function() {
//     addDiv();
//   });
  
//   $("body").on("click", ".box", function() {
//     alert("hi");
//   });


// $("#btn").on("click", function(){
//     let newPost = "<div class=blog> bla bla bla</div>";
//     $("#blogs").append(newPost);
// })

// $("#blogs").on("click", ".blog", function(){
//     $(this).text("RRRRR");
// })

// let posts = [{name: 'Shoobert'}, {name: 'Kayne'}]

// for(let post of posts){
//     $("#posts").append(`
//         <div>${post.name}</div>
//         <input type="text" placeholder="say something nice" />
//     `)
// }

// posts.splice(0, 1)

$('#btn').click(alert('hi'))