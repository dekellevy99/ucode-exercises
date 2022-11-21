interface Food{
    name: string,
    dailyQuantity: number
}

abstract class Animal{
    private _name: string;
    private _food: Food;

    constructor(name: string, food: Food){
        this._name = name;
        this._food = food;
    }

    abstract feed(): boolean

    // == GET METHODS ==
    get name(): string{
        return this._name;
    }

    get food(): Food{
        return this._food;
    }

    // == SET METHODS ==
    set name(name: string){
        this._name = name;
    }

    set food(food: Food){
        this._food = food;
    }
}

