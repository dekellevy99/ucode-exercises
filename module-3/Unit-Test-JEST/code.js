const add = function(a, b){
    return a+b;
}

const calculateHyp = function(a, b){
    return Math.sqrt(a*a + b*b);
}

const clearLowPriority = function(objects){
    return objects.filter(o => o.priority !== "LOW");
}

class PictureManager {
    constructor() {
        this.pictureURLs = []
    }

    addPicture(picURL) {
        this.pictureURLs.push(picURL)
    }

    removePicture(picURL) {
        this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
    }
}

class ArrayManipulator {
    manipulate(arr1, arr2) {
        if(arr1.length !== arr2.length){
            return {error: "Array lengths don't match"}
        }
        let obj = {}
        for (let i in arr1) {
            obj[arr1[i]] = arr2[i]
        }
        return obj
    }
}

module.exports = {add, calculateHyp, clearLowPriority, PictureManager, ArrayManipulator}