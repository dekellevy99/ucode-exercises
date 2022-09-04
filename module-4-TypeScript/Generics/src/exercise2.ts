class Numbers<Type>{
    numbers: Type[];

    constructor(numbers: Type[]){
        this.numbers = numbers;
    }

    addNumber(number:Type): void{
        this.numbers.push(number);
    }

    sum(): number{
        let result = 0;
        this.numbers.forEach(num => {
            if(typeof(num) === "number"){
                result += num;
            }else if(typeof(num) === "string"){
                result += parseInt(num) || 0;
            }
        })
        return result;
    }
}

const numbers1: Numbers<string> = new Numbers<string>(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");

const numbers2: Numbers<number> = new Numbers<number>([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);

console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);