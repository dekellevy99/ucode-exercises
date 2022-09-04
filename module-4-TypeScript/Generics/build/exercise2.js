"use strict";
class Numbers {
    constructor(numbers) {
        this.numbers = numbers;
    }
    addNumber(number) {
        this.numbers.push(number);
    }
    sum() {
        let result = 0;
        this.numbers.forEach(num => {
            if (typeof (num) === "number") {
                result += num;
            }
            else if (typeof (num) === "string") {
                result += parseInt(num) || 0;
            }
        });
        return result;
    }
}
const numbers1 = new Numbers(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");
const numbers2 = new Numbers([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);
console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);
