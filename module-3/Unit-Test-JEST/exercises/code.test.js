const utils = require('./code')

// ==== tests for exercise 1 ====
describe("isEven should return if a given number is even or not", function(){
    test("should return false according to an odd number", () => {
        let res = utils.isEven(3);
        expect(res).toBeFalsy();
    })

    test("should return true according to an even number", () => {
        let res = utils.isEven(4);
        expect(res).toBeTruthy();
    })

    test("should return false according to a parameter which is not a valid number", () => {
        let res = utils.isEven("fdsf");
        expect(res).toBeFalsy();

    })
})



//==== tests for exercise 2 ====
describe("removeAtLeastOne should remove at least one elemnt from a given array", function(){
    test("should remove at least one elemnt from a given array", () => {
        const arr = [1,2,3];
        let initialArrLength = arr.length;
        let res = utils.removeAtLeastOne(arr);
    
        expect(res.length).toBeLessThan(initialArrLength);
    })
    
    test("shouldn't remove when given array is empty", () => {
        const arr = [];;
        let res = utils.removeAtLeastOne(arr);
    
        expect(res.length).toBe(0);
    })
})


//==== tests for exercise 3 ====
describe(`check simplify function`, function(){
    test(`simplify should return a clean string without these symbols: "!", "#", ".", ",", "'"`, () => {
        const str = "He!!o t,her#. What's up?";
        const blacklsit = ["!", "#", ".", ",", "'"];

        const cleanStr = utils.simplify(str);
        blacklsit.forEach(c => {expect(cleanStr).not.toContain(c)});
        expect(cleanStr).toBe("Heo ther Whats up?");
    })
})


//==== tests for exercise 4 ====
describe("check validate function", function(){
    test("should return an error message when get an array witout at least one boolean", () => {
        const arr = ["hii", "hello"];
        let result = utils.validate(arr);
        expect(result).toBe("Error: array is supposed to contain at least one boolean value");
    })
    
    test("should return true according to given array with more truty values than falsey", () => {
        const arr = ["hii", "hello", true, false, true];
        let result = utils.validate(arr);
        expect(result).toBe(true);
    })
    
    test("should return false according to given array with more falsey values than truty", () => {
        const arr = ["hii", "hello", false, false, true];
        let result = utils.validate(arr);
        expect(result).toBe(false);
    })
})

//==== tests for extension exercise ====
describe("check add function", function(){
    test("check if Array.prototype.push has been called", () => {
        let mock = jest.spyOn(Array.prototype, 'push').mockName("mock-push");
        utils.add();
        expect(mock).toHaveBeenCalled();
    })
})