const emailValidator = function(string){
    // const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const mailFormat = /^[a-z]+[\.-]?[a-z]+@[a-z]+(\.[a-z]{2,3})*(\.com)$/
    return mailFormat.test(string);
}

const email1 = "cat@meow.com"
const email2 = "bad1npuT!@gmail.com"
const email3 = "meow@gmail.net"

console.log(emailValidator(email1))
console.log(emailValidator(email2))
console.log(emailValidator(email3)) 