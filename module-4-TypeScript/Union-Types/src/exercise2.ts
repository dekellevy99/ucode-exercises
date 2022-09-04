type PhoneNumbers = string | string[] | number | number[];

const printNumbers = function(numbers: PhoneNumbers){

    if(Array.isArray(numbers)){
        if(typeof(numbers[0]) === "string"){
            console.log("String[] = " + numbers)
        }else{
            console.log("number[] = " + numbers)
        }
    }else if(typeof(numbers) === "string"){
        console.log("string = " + numbers)
    }else{
        console.log("number = " + numbers)
    }
}
