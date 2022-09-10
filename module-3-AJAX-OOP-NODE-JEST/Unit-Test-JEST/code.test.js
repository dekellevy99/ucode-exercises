const utils = require('./code')

test("add should return sum of a + b", () => {
    let sum = utils.add(1, 2)
    expect(sum).toBe(3)
})

test("calculateHyp should return the square root of the numbers' squares", function(){
    let result = utils.calculateHyp(3, 4);
    expect(result).toBe(5);
})

test("clearLowPriority should return an array with all objects have no low priority", ()=>{
    const objects = [{text: "1", priority: "LOW"},
                    {text: "2", priority: "LOW"},
                    {text: "3", priority: "HIGH"},
                    {text: "4", priority: "LOW"},
                    {text: "5", priority: "HIGH"}];
    const filterdObjets = utils.clearLowPriority(objects);
    filterdObjets.forEach(obj => {
        expect(obj.priority).toBe("HIGH");
    })

})

test("addPicture should add a picture URL to the pictureURLs array", function () {
    //sanity 
    const picManager = new utils.PictureManager()
    expect(picManager.pictureURLs.length).toBe(0)
    
    picManager.addPicture("some_url")
    expect(picManager.pictureURLs.length).toBe(1)           //test
    expect(picManager.pictureURLs).toContain("some_url")    //double check 
  })

  test("removePicture should remove a picture URL from the pictureURLs array", function(){
    const picManager = new utils.PictureManager();
    expect(picManager.pictureURLs.length).toBe(0);

    picManager.addPicture("some_url")
    picManager.addPicture("some_url2")
    picManager.addPicture("some_url3")

    picManager.removePicture("some_url2")
    expect(picManager.pictureURLs.length).toBe(2)
    expect(picManager.pictureURLs.length).not.toContain("some_url2") //here this isn't double checking, this is necessary
  })

  test("should convert two arrays of equal length to a single object with key-values from the arrays", () => {
    let arrayManipulator = new utils.ArrayManipulator()
    let x = ["food", "item", "location"]
    let y = ["cherry", "lightbulb", "Tazmania"]

    let result = arrayManipulator.manipulate(x, y)

    expect(result).toEqual({
        food: "cherry",
        item: "lightbulb",
        location: "Tazmania"
    })
})

test("should return a message when array lengths don't match", () => {
    let arrayManipulator = new utils.ArrayManipulator()
    let x = ["food", "item", "location"]
    let y = ["cherry", "lightbulb"]

    let result = arrayManipulator.manipulate(x, y)

    expect(result).toEqual({ error: "Array lengths don't match" })
})