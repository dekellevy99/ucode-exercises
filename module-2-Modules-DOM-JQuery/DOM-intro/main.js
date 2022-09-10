// console.log(document)
// const playingField = document.getElementById("playing-field")
// console.log(playingField)

// const down = document.getElementById("down");
// console.log(down)
// console.log(down.innerHTML)
// down.innerHTML = "Down"
// console.log(playingField.innerHTML)
// playingField.style.backgroundColor = 'blue'

// const ball = document.getElementById("ball")
// console.log(ball)
// ball.style.backgroundColor = 'yellow'

// const moveRight = function(){
//     const ball = document.getElementById("ball");
//     let curPos = ball.style.left;
//     if (curPos === ""){
//         curPos += "15px";
//     }else{
//         curPos = parseInt(curPos);
//         curPos += 15; 
//         curPos += "px";
//     }

//     ball.style.left = curPos;
//   }

// const header = document.createElement("h1")
// header.innerHTML = "The Best Game Ever"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
// document.body.appendChild(header)

// const subHeader = document.createElement("h2");
// subHeader.innerHTML = "Game Created by: ------";
// subHeader.setAttribute("class", "sub-header");
// document.body.appendChild(subHeader);



// const box = document.getElementById("box")

// const enterColor = function () {
//     box.style.backgroundColor = "#c0392b"
//     box.innerHTML = "AHH GO AWAY"
// }

// const leaveColor = function () {
//     box.style.backgroundColor = "#1abc9c"
//     box.innerHTML = "Hover over me!"
// }

// const pressColor = function(){
//     box.style.backgroundColor = "#8e44ad";
// }

const list = document.getElementById("list");
const addItem = function(){
    let newItem = document.createElement("li");
    newItem.innerHTML = "A new Item!";
    newItem.setAttribute("class", "list-item");
    newItem.setAttribute("onclick", "addItem()");
    list.appendChild(newItem);
}

const someBox = document.getElementById("some-box");
someBox.onclick = function(){
    someBox.style.backgroundColor = "yellow";
    const newBox = document.createElement("div");
    newBox.innerHTML = "child Box";
    newBox.style.backgroundColor = "green";
    someBox.appendChild(newBox);
    newBox.onclick = function(){
        newBox.style.backgroundColor = "red";
    }
}

