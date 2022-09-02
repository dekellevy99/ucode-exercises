const firstURL = "www.workingurl.com"
const secondURL = "iamabadurl.com"
const thirdURL = "www.doireallywork.net"

const urlValidator = function(str){
    const urlFormat = /^www.[a-z]{2,}(\.[a-z]{2,3})+/
    return urlFormat.test(str);
}

console.log(urlValidator(firstURL)) 
console.log(urlValidator(secondURL))
console.log(urlValidator(thirdURL))