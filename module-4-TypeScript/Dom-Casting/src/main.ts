(function(){
    const doX = function(){
        const inputElem = <HTMLInputElement>document.querySelector(".foo");
        const inputText = inputElem.value;
        console.log(inputText);
        inputElem.value = "";
    }
    
    document.getElementById("btn")?.addEventListener("click", doX);
    document.querySelector(".foo")?.addEventListener("input", function(event){
        const inputElem = event.target as HTMLInputElement;
        console.log(inputElem.value);
    })
})()

