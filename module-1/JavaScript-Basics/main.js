// --------- conditional statement exercise -----------
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = false
let currentYear = 2018

if (boughtTesla){
    if (isUSCitizen){
        if (currentYear - yearOfTeslaPurchase >= 4){
            console.log("Woulg you like an upgrade?")
        }else{
            console.log("Are you satisfied?")

        }
    } else {
        console.log("Would you like to move to the US?")
    }
} else {
    console.log("Are you interested in buying one?")
}


// --------- array exercise ----------- 
const numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.splice(1, 2)
numbers[3] = 1
numbers.splice(-4, 4)
numbers.splice(0, 0, 0)
console.log(numbers)

// --------- objects exercise ----------- 
// --- ex1 ---
let p1 = {
    name: "David",
    age: 25,
    city: "Jerusalem"
}

let p2 = {
    name: "Dana",
    age: 25,
    city: "Tel Aviv"
}

if (p1.age == p2.age){
    if (p1.city == p2.city){
        console.log("David wanted to date Dana")
    }else{
        console.log("David wanted to date Dana, but couldn't")
    }
}

// --- ex2 ---

let library = {
    books: [{title: "A", author: "A"}, {title: "B", author: "B"}],
    numBooks: 2,
    name: "Dekel's Library"
}

console.log(library.numBooks)
console.log(library.name)
console.log(library.books[0].title)

//--- ex3 (extra) ---
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');
  if (name in reservations){
    if (reservations[name].claimed == false){
        console.log("Welcome " + name + "!!")
    }else{
        console.log("Hmm, someone already claimed this reservation")
    }

  }else{
    reservations[name] = {claimed: true}
    console.log("You have no reservation")
  }


// --- extensions ---

// const date = 3

// const kitchen = {
//     owner: "Geraldine",
//     hasOven: true,
//     fridge: {
//         price: 500,
//         works: true,
//         items: [
//             { name: "cheese", expiryDate: 7 },
//             { name: "raddish", expiryDate: 2 },
//             { name: "bread", expiryDate: 1 }
//         ]
//     }
// }


// const hasOven = kitchen.hasOven
// const isFridgeWork = kitchen.fridge.works

// if (hasOven){
//     if (isFridgeWork){

//     }else{

//     }

// }else{
//     if (isFridgeWork){

//     }else{

//     }

// }


// --------- Loops exercise ----------- 
// --- ex1 ---
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

let numPeople = names.length
for (let i = 0; i < numPeople; i++){
    let curPerson = {
        name: names[i],
        age: ages[i]
    }

    people.push(curPerson)
}

// --- ex2 ---
for (let person of people){
    console.log(person.name + " is " + person.age + " years old")
}

// --- ex3 ---
const posts = [
    {id: 2, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]


for(let i = 0; i < posts.length; i++){
    if (posts[i].id == 2){
        posts.splice(i, 1)
        i = -1
    }
}


console.log(posts)


// --- ex4 ---

const postsArray = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 2, 
      text: "So glad I found this. Bought four already!",
      comments: [
                    {id: 1, text: "Idiot has no idea"}, 
                    {id: 2, text:"Fool!"}, 
                    {id: 3, text: "I agree!"}
                ]
     }
  ]

for(let post of postsArray){
    if (post.id == 2){
        for(let i = 0; i < post.comments.length; i++){
            if (post.comments[i].id == 3){
                post.comments.splice(i, 1)
                i = -1
            }
        }
    }
}

console.log(postsArray)

// --- extensions ---
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

let keysDict = Object.keys(dictionary)
for (let key of keysDict){
    console.log("Words begin with the letter - " + key + ":")
    for (let word of dictionary[key]){
        console.log(word)
    }
}

