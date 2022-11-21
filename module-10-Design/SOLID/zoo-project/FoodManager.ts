class FoodManager{
    private _supply: any

    constructor(){
        this._supply = {
            meat: 0,
            plankton: 0,
            seeds: 0,
            wormds: 0,
            algae: 0
        }
    }

    increaseSupply(type: string, quantity: number){
        this._supply[type] += quantity
    }

    decreaseSupply(type: string, quantity: number){
        this._supply[type] -= quantity
    }


    feed(animal: Animal){
        let animalFoodName = animal.food.name
        let animalFoodQuantity = animal.food.dailyQuantity 

        if(animalFoodQuantity > this._supply[animalFoodName]){
            throw new Error(`ran out of ${animalFoodName}`)
        }else{
            this.decreaseSupply(animalFoodName, animalFoodQuantity)
        }
    }
}