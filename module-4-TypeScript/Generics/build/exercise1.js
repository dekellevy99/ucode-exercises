"use strict";
const sum = function (numbers) {
    const ERROR = -1;
    let result = 0;
    if (Array.isArray(numbers)) {
        numbers.forEach(num => {
            if (typeof (num) === "number") {
                result += num;
            }
            else if (typeof (num) === "string") {
                result += parseInt(num) || 0;
            }
        });
        return result;
    }
    else if (typeof (numbers) === "string") {
        return parseInt(numbers) || ERROR;
    }
    else if (typeof (numbers) === "number") {
        return numbers;
    }
    else {
        console.log("Oops, the function should only accept `string`, `string`, `number`, `number[]` ");
        return ERROR;
    }
};
console.log(sum("23"));
console.log(sum("Tomer"));
console.log(sum(44));
console.log(sum(["test", 22, 55, "block", "9"]));
console.log(sum([23, 433, 11]));
