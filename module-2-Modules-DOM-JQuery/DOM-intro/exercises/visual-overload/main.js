const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
}

const checkWin = function(){
  const container = document.getElementById("container");
  let boxes = container.childNodes;
  for(let i = 0; i < boxes.length-1; i++){
    console.log(boxes[i].style.backgroundColor == boxes[i+1].style.backgroundColor);
    if (boxes[i].style.backgroundColor != boxes[i+1].style.backgroundColor){
      return false
    }
  }
  return true;
}

const changeBackground = function(){
  let randomColor = getRandomColor();
  this.style.backgroundColor = randomColor;
  if(checkWin()){
    let winMsg = document.createElement("h1")
    winMsg.setAttribute("id", "win-msg")
    winMsg.innerHTML = "You Win, Good Job!!"
    document.body.appendChild(winMsg);
  }
}

const genBoxes = function(){
  const container = document.getElementById("container");
  for(let i = 0; i < 5; i++){
    let curBox = document.createElement("div");
    curBox.setAttribute("class", "boxes");
    curBox.onmouseenter = changeBackground;
    container.appendChild(curBox);
  }
}

genBoxes()