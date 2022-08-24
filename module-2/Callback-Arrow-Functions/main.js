// let users = []

// const getData = function (dispFunc) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         dispFunc();

//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData);

// (number => console.log(number*number))(4);

// const getFormalTitle = (title, name) => `${title} ${name}`

// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle)

const suspenseBuilder = {
    name: "El Mysterio",
    displayName: function () {

        console.log("You are going to see the name in 3 seconds...")

        setTimeout(function () { //normal function
            ﻿console.log("The name is: " + this.name)
        }, 3000)

    }
}

suspenseBuilder.displayName()