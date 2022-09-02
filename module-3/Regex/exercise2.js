const regexArr = [/a/, /b/, /^d/, /e$/];
const str = "Bike"
const str1 = "the room is on fire"
const str2 = "Fergalicious"
const str3 = "Fox in sheep clothing"

const searchMatchingRegex = function(string){
    let result = false;
    for(const regex of regexArr){
        result = result || regex.test(string);
    }

    return result;
}

console.log(searchMatchingRegex(str)) //return true (ends with e)
console.log(searchMatchingRegex(str1)) //return true (ends with e)
console.log(searchMatchingRegex(str2)) //return true (contains a)
console.log(searchMatchingRegex(str3)) //return false