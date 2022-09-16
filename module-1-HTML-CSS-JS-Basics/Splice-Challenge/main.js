const setStartIndex = function(start, length){
    if (start > length){
        start = length
    }

    if (start < 0){
        start = (length + start) > 0? length + start : 0
    }

    return start
}

const setDeleteCount = function(deleteCount, start, length){
    if (deleteCount == undefined || deleteCount > length - start){
        deleteCount = length - start
    } 

    if (deleteCount < 0){
        deleteCount = 0
    }

    return deleteCount
}


const splice = function(arr, start, deleteCount=undefined, ...items){
    start = setStartIndex(start, arr.length);
    deleteCount = setDeleteCount(deleteCount, start, arr.length);

    postfix = [];
    deletedElements = [];

    for(let i = start + deleteCount; i < arr.length; i++){
        postfix.push(arr[i])
    }


    for(let i = arr.length - 1; i >= start ; i--){
        if (i < start + deleteCount){
            deletedElements.push(arr[i])
        }
        arr.pop()
    }

    for(const item of items){
        arr.push(item)
    }

    for(const val of postfix){
        arr.push(val)
    }

    return deletedElements
}

// ============================ TESTS ============================

// remove 1 element
let arr = [1,2,3]
splice(arr, 0,1); 
console.log(arr); //should be [2,3]

// add 1 element
arr = [1,2,3]
splice(arr, 0,0,0); 
console.log(arr); //should be [0,1,2,3]

// add 2 elements
arr = [1,2,3]
splice(arr,0,0,-1,0); 
console.log(arr); //should be [-1,0,1,2,3]

// replace 1 element
arr = [1,2,3]
splice(arr,1,1,55); 
console.log(arr); //should be [1,55,3] 

// delete all elements from index to end
arr = [1,2,3,4,5]
splice(arr,1); 
console.log(arr); //should be [1] 

// returns array of deleted elements
arr = [1,2,3]
let deleted = splice(arr,1); 
console.log(deleted); //should be [2,3] 

// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = splice(arr,1,1); 
console.log(deleted); //should be [2] 

// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = splice(arr,1,0,5); 
console.log(deleted); //should be [] 