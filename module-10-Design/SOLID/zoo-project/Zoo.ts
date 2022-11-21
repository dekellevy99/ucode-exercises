class Zoo{
    private _animals: Animal[];
    private _food_manager: FoodManager;

    constructor(){
        this._animals = [];
        this._food_manager = new FoodManager();
    }
}