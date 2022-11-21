abstract class Fish extends Animal{
    private _lowestDepth: number;

    constructor(name: string, food: Food, lowestDepth: number){
        super(name, food);
        this._lowestDepth = lowestDepth
    }

    // == GET METHODS ==
    get lowestDepth(): number{
        return this._lowestDepth
    }

    // == SET METHODS ==
    set lowestDepth(lowestDepth: number){
        this._lowestDepth = lowestDepth
    }
}