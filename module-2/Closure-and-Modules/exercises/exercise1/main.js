const StringFormatter = function(){
    const capitalizeFirst = function(str){
        return str[0].toUpperCase() + str.substring(1).toLowerCase();
    }

    const skewerCase = function(str){
        return str.replaceAll(" ", "-");

    }

    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    };
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")); //should print Dorothy
console.log(formatter.skewerCase("blue  box")); //should print blue-box