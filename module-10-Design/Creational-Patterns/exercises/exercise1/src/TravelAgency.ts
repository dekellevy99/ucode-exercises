import {VehicleType} from './Vehicles/Vehicle'
import VehicleFactory from './VehicleFactory';
import Passenger from './Passenger';

class TravelAgency{
    private _vehicleStock: Map<VehicleType, number>;;
    private _vehicleFactory: VehicleFactory;

    public constructor(numBoats: number, numTaxis: number, numPlanes: number, numBuses: number){
        this._vehicleStock = new Map<VehicleType, number>([
            [VehicleType.BOAT, numBoats],
            [VehicleType.TAXI, numTaxis],
            [VehicleType.PLANE, numPlanes],
            [VehicleType.BUS, numBuses],
        ]);

        this._vehicleFactory = VehicleFactory.getVehicleFactoryInstance();
    }

    public assignVehicleToPassenger(passenger: Passenger){
        let favoritePassengerVehicle = passenger.favoriteVehicle
        let quantity = this._vehicleStock.get(favoritePassengerVehicle);
        if(quantity != undefined && quantity> 0){
            this._vehicleStock.set(favoritePassengerVehicle, quantity-1)
            return this._vehicleFactory.createVehicle(favoritePassengerVehicle);
        }
    }
}

export default TravelAgency