class Whale extends Bird{
    constructor(name: string, food: Food, durationOfPregnancy: number){
        super(name, food, durationOfPregnancy)
    }

    feed(): boolean{
        return true
    }
}