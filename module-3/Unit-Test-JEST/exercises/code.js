// ==== exercise 1 ====
//should return true if n is even, false otherwise
const isEven = function(n) {
    return n % 2 == 0 ? true : false
}

//exercise 2
//should remove at least one element from the array `arr`
const removeAtLeastOne = function(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
    arr.splice(0, numItemsToRemove)
    return arr
}

// ==== exercise 3 ====
//should return a clean string without these symbols: "!", "#", ".", ",", "'"
const simplify = function (str){
    let symbols = ["!", "#", ".", ",", "'"]
    return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
}

// ==== exercise 4 ====
const validate = function(arr){
    let booleanObj = {true: 0, false: 0}

    for(const elem of arr){
        if(elem === true){
            booleanObj.true += 1;
        }else if(elem === false){
            booleanObj.false += 1;
        }
    }

    if(booleanObj.true === 0 && booleanObj.false === 0){
        return "Error: array is supposed to contain at least one boolean value";
    }else{
        return (booleanObj.true > booleanObj.false) ? true : false;

    }
}

// ==== Extension exercise ====
const add = function(x, y){
    let stuff = []
    stuff.push(x, y)
}


module.exports = {isEven, removeAtLeastOne, simplify, validate, add}