abstract class Mammal extends Animal{
    private _durationOfPregnancy: number;

    constructor(name: string, food: Food, durationOfPregnancy: number){
        super(name, food);
        this._durationOfPregnancy = durationOfPregnancy
    }

    // == GET METHODS ==
    get durationOfPregnancy(): number{
        return this._durationOfPregnancy
    }

    // == SET METHODS ==
    set durationOfPregnancy(durationOfPregnancy: number){
        this._durationOfPregnancy = durationOfPregnancy
    }
}