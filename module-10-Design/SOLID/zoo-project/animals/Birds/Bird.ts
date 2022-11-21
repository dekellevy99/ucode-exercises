abstract class Bird extends Animal{
    private _wingSpan: number;

    constructor(name: string, food: Food, wingSpan: number){
        super(name, food);
        this._wingSpan = wingSpan
    }

    // == GET METHODS ==
    get wingSpan(): number{
        return this._wingSpan
    }

    // == SET METHODS ==
    set wingSpan(wingSpan: number){
        this._wingSpan = wingSpan
    }
}