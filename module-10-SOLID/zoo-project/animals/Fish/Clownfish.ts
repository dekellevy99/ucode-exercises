class Clownfish extends Bird{
    constructor(name: string, food: Food, lowestDepth: number){
        super(name, food, lowestDepth)
    }

    feed(): boolean{
        return true
    }
}