const arrowUp = document.getElementById("up");
const arrowDown = document.getElementById("down");
const arrowLeft = document.getElementById("left");
const arrowRight = document.getElementById("right");
const board = document.getElementById("playing-field");
const ball = document.getElementById("ball")
const MOVEMENT = 15;


const calcHorLim = function(){  
    let boardWidth = parseInt(getComputedStyle(board).width);
    let ballWidth = parseInt(getComputedStyle(ball).width);
    return boardWidth-ballWidth;
}

const caclVerLim = function(){
    let boardHeight = parseInt(getComputedStyle(board).height);
    let ballHeight = parseInt(getComputedStyle(ball).width);
    return boardHeight-ballHeight;
}


arrowRight.onclick = function(){
    let pos = parseInt(ball.style.left) || 0;
    let limit = calcHorLim()

    if (pos + MOVEMENT < limit){
        pos += MOVEMENT; 
        ball.style.left = `${pos}px`;
    }
}

arrowLeft.onclick = function(){
    let pos = parseInt(ball.style.left) || 0;
    if(pos - MOVEMENT >= 0){
        pos -= 15; 
        ball.style.left = `${pos}px`;
    }
}

arrowDown.onclick = function(){
    let pos = parseInt(ball.style.top) || 0;
    let limit = caclVerLim();
    if (pos + MOVEMENT < limit){
        pos += MOVEMENT;
        ball.style.top = `${pos}px`  
    }
}


arrowUp.onclick = function(){
    let pos = parseInt(ball.style.top) || 0;
    if(pos - MOVEMENT >= 0){
        pos -= 15; 
        ball.style.top = `${pos}px`;
    }
}