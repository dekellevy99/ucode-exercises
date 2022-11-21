class Owl extends Bird{
    constructor(name: string, food: Food, swingSpan: number){
        super(name, food, swingSpan)
    }

    feed(): boolean{
        return true
    }
}