const concat = function(input: string|string[], shouldPrinted: boolean|number): void{
    let result: string = "";
    if(Array.isArray(input)){
        input.forEach(str => result += str);  
    }else{
        result = input;
    }


    if(typeof(shouldPrinted) === "number"){
        if(shouldPrinted === 1){
            console.log(result);
        }else if(shouldPrinted !== 0){
            console.log(`function doesn't support "${shouldPrinted}" as a second argument`);
        }
    }else if(shouldPrinted){
        console.log(result);
    }
}

concat("stam", true);
concat("stam", false);
concat("stam", 1);
concat("stam", 0);
concat("stam", 2);

concat(["stam1", "stam2"], true);
concat(["stam1", "stam2"], false);
concat(["stam1", "stam2"], 1);
concat(["stam1", "stam2"], 0);
concat(["stam1", "stam2"], 2);
