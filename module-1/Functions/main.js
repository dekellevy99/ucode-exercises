// ---- ecercise 1 ----

const isEven = function(number){
    if(number%2 == 0){
        return true
    }
    return false
}

console.log(isEven(8))

// ---- ecercise 2 ----
function printOdds(numbers){
    for(let num of numbers){
        if (!isEven(num)){
            console.log(num)
        }
    }
}

printOdds([1,2,3,4,5,6,7,8,9])

// ---- ecercise 3 ----
const checkExists = function(numbers, num){
    for(let number of numbers){
        if(number == num){
            return true
        }
    }
    return false
}

console.log(checkExists([1, 2, 3], 2))
console.log(checkExists([1, 2, 3], 5))

// ---- ecercise 4 ----
const calculator = {
    add: function(num1, num2){
        return num1 + num2
    },

    subtract: function(num1, num2){
        return num1 - num2
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2))

// ---- ecercise 5 ----
const increaseByNameLength = function(money, name){
    return money * name.length
}

const makeRegal = function(name){
    return "His Royal Highness, " + name
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"