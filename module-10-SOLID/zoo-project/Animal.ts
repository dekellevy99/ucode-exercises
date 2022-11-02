abstract class Animal{
    private _name: string;

    constructor(name: string){
        this._name = name
    }

    abstract feed(): boolean

    // == GET METHODS ==
    get name(): string{
        return this._name
    }

    // == SET METHODS ==
    set name(name: string){
        this._name = name
    }
}

