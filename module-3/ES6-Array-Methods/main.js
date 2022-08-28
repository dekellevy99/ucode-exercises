//filter
let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9];
let olderThan16 = ages.filter(a => a > 16);
console.log(olderThan16);

let vegetables = [
    { name: "Eggplant", color: "purple" },
    { name: "Carrot", color: "orange" },
    { name: "Squash", color: "orange" },
    { name: "Tomatoe", color: "red" },
    { name: "Onion", color: "white" },
    { name: "Sweet Potato", color: "orange" }]

let orangeVeg = vegetables.filter(v => v.color === "orange")

// for each
orangeVeg.forEach(v => console.log(v))

let people = [
    { salary: 1300, goodPerformance: false },
    { salary: 1500, goodPerformance: true },
    { salary: 1200, goodPerformance: true },
    { salary: 1700, goodPerformance: false },
    { salary: 1600, goodPerformance: true },
]

const addSalary = function(person){
    if(person.goodPerformance){
        person.salary += 300;
    }
}

people.forEach(addSalary)
people.forEach(p => console.log(p.salary))

// map
let poundWeights = [142, 180, 178, 121, 132]

let kiloWeights = poundWeights.map(pw => Math.round(pw / 2.2))
console.log(kiloWeights) //prints [65, 82, 81, 55, 60]

let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"];
let lowerCaseMsg = messagesFromDad.map(m => {return m.toLowerCase()});
console.log(lowerCaseMsg)

// find
let posts = [
    {
        id: 0, 
        text: "I'm not here",
        comments: [{ id: 0, text: "support that" }]
    },
    {
        id: 1, 
        text: "Find me",
        comments: [
            { id: 0, text: "here I am" },
            { id: 1, text: "rock you like a hurricane" },
            { id: 2, text: "dum dum" }]
    },
    {
        id: 2, 
        text: "Where's waldo anyway",
        comments: [
            { id: 0, text: "who's waldo" },
            { id: 1, text: "he's called Effi" }]
    },
    {
        id: 3, 
        text: "Poof",
        comments: [{ id: 0, text: "like magic" }]
    }
]
const findCommentByID = function(postID, commentID){
    let post = posts.find(p => p.id === postID);
    let comment = post.comments.find(c => c.id === commentID);
    console.log(comment)
}
findCommentByID(1, 0)


// some & every
let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]

if(movies.some(m => m.studio === "Marvel")){
    console.log("Let’s go watch some movies")
}else{
    console.log("Let’s stay at home")
}

if(movies.every(m => m.year >= 2020)){
    console.log("Futuristic stuff")
}else{
    console.log("Yawn")
}


