// 3 ways to set an key-value
localStorage.setItem("name", "dekel");
localStorage.name = "dani";
localStorage["name"] = "david"

// 3 ways to get a a value of a key
let name1 = localStorage.name;
let name2 = localStorage["name"];
let name3 = localStorage.getItem("name");

console.log(name1)
console.log(name2)
console.log(name3)

// remove
localStorage.removeItem('name')
localStorage.clear()

// storring a complex data
x = JSON.stringify({
    averageTimeOnSite: {unit: "hr", amt: 9},
    probabilityOfFriends: 0.02,
    commonKeywords: ["salsa for one", "1 vs. none Chess"]
  })
console.log(x) //prints a string-version of the object

localStorage.personalData = JSON.stringify({
    averageTimeOnSite: {unit: "hr", amt: 9},
    probabilityOfFriends: 0.02,
    commonKeywords: ["salsa for one", "1 vs. none Chess"]
  })

let userStuff = localStorage.personalData //the object we stored earlier
console.log(userStuff.probabilityOfFriends) //prints undefined

userStuff = JSON.parse(localStorage.personalData)
console.log(userStuff.probabilityOfFriends) //prints 0.02

let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}
localStorage.userStorage = JSON.stringify(userStorage);
console.log(localStorage.userStorage)
console.log((JSON.parse(localStorage.userStorage)).cart[1].count)