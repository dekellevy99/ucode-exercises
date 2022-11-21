import {VehicleType} from './Vehicles/Vehicle'

class Passenger{
    private _name: string;
    private _favoriteVehicle: VehicleType;

    public constructor(name: string, favoriteVehicle: VehicleType) {
        this._name = name;
        this._favoriteVehicle = favoriteVehicle;
    }

    public get name(): string{
        return this._name;
    }

    public get favoriteVehicle(): VehicleType{
        return this._favoriteVehicle;
    }

    public set name(name: string){
        this._name = name;
    }

    public set favoriteVehicle(favoriteVehicle: VehicleType){
        this._favoriteVehicle = favoriteVehicle;
    }
}

export default Passenger