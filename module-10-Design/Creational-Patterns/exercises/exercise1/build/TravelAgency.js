"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = require("./Vehicles/Vehicle");
const VehicleFactory_1 = __importDefault(require("./VehicleFactory"));
class TravelAgency {
    constructor(numBoats, numTaxis, numPlanes, numBuses) {
        this._vehicleStock = new Map([
            [Vehicle_1.VehicleType.BOAT, numBoats],
            [Vehicle_1.VehicleType.TAXI, numTaxis],
            [Vehicle_1.VehicleType.PLANE, numPlanes],
            [Vehicle_1.VehicleType.BUS, numBuses],
        ]);
        this._vehicleFactory = VehicleFactory_1.default.getVehicleFactoryInstance();
    }
    ;
    assignVehicleToPassenger(passenger) {
        let favoritePassengerVehicle = passenger.favoriteVehicle;
        let quantity = this._vehicleStock.get(favoritePassengerVehicle);
        if (quantity != undefined && quantity > 0) {
            this._vehicleStock.set(favoritePassengerVehicle, quantity - 1);
            return this._vehicleFactory.createVehicle(favoritePassengerVehicle);
        }
    }
}
exports.default = TravelAgency;
