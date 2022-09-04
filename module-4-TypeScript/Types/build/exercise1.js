"use strict";
//exercise 1
const sum = function (numbers) {
    let sum = 0;
    numbers.forEach(n => { sum += n; });
    return sum;
};
const isEven = function (num) {
    return num % 2 === 0;
};
const arr1 = [1, 2, 3, 4];
let sum1 = sum(arr1);
console.log(`[${arr1}] - ${sum1} - ${isEven(sum1)}`);
const arr2 = [5, 6, 7];
let sum2 = sum(arr2);
console.log(`[${arr2}] - ${sum2} - ${isEven(sum2)}`);
const arr3 = [8, 9, 10];
let sum3 = sum(arr3);
console.log(`[${arr3}] - ${sum3} - ${isEven(sum3)}`);
