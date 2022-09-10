import validator from "validator";

//ex1
let isValidEmail = validator.isEmail("shoobert@dylan");
console.log(isValidEmail)

//ex2
const phone = "786-329-9958"
let isValidPhone = validator.isMobilePhone(phone, 'en-US')
console.log(isValidPhone)

//ex3
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
let text = "I'M SO EXCITED!!!~!"
let cleanText = validator.blacklist(text, blacklist);
console.log(cleanText);