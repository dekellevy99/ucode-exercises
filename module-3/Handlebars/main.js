// const items = [
//     { item: "cheese", price: 15 },
//     { item: "arak", price: 68 },
//     { item: "hummus", price: 15 },
//     { item: "pita", price: 5 }
//   ]

// // turn our "template" into html
// let source = $('#store-template').html();

// // compile our template html using handlebars
// let template = Handlebars.compile(source);

// for(const item of items){
//     $(".items").append(template({item: item.item, price: item.price}))
// }

// // fill our template with information
// var newHTML = template({item: "bread", price: "3"});

// // append our new html to the page
// $('.items').append(newHTML);

// var newHTML2 = template({item: "Cheese", price: "10"});

// $('.items').append(newHTML2);


// var classData = {
//   classmates: [
//       {name: "That on gal", description: "Always has the ansswer"},
//       {name: "The weird dude", description: "Quick with a smile"},
//       {name: "Taylor", description: "Just Taylor"}
//   ]
// }


// let source = $("#class-template").html();
// let template = Handlebars.compile(source);
// $(".students").append(template(classData))

// const menuData = {
//   menu: [
//     { name: "Google", link: "http://google.com", socialNetwork: true},
//     { name: "Facebook", link: "http://facebook.com", socialNetwork: false},
//     { name: "Instagram", link: "http://nstagram.com", socialNetwork: false},
//     { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
//   ]
// };

// const source = $('#menu-template').html();
// const template = Handlebars.compile(source);
// const newHTML = template(menuData);

// // append our new html to the page
// $('.menu').append(newHTML);

const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const animalsScript = $("#animals-template").html();
const animalsTemplate = Handlebars.compile(animalsScript);
$(".animals").append(animalsTemplate({animalsList: animals}));

const languagesScript = $("#languages-template").html();
const languagesTemplate = Handlebars.compile(languagesScript);
$(".languages").append(languagesTemplate(languages));