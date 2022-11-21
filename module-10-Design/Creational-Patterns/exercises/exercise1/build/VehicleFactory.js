"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = require("./Vehicles/Vehicle");
const Boat_1 = __importDefault(require("./Vehicles/Boat"));
const Taxi_1 = __importDefault(require("./Vehicles/Taxi"));
const Bus_1 = __importDefault(require("./Vehicles/Bus"));
const Plane_1 = __importDefault(require("./Vehicles/Plane"));
class VehicleFactory {
    constructor() { }
    ;
    static getVehicleFactoryInstance() {
        if (!VehicleFactory.instance) {
            VehicleFactory.instance = new VehicleFactory();
        }
        return VehicleFactory.instance;
    }
    createVehicle(type) {
        switch (type) {
            case Vehicle_1.VehicleType.PLANE:
                return new Plane_1.default();
            case Vehicle_1.VehicleType.BOAT:
                return new Boat_1.default();
            case Vehicle_1.VehicleType.TAXI:
                return new Taxi_1.default();
            case Vehicle_1.VehicleType.BUS:
                return new Bus_1.default();
        }
    }
}
exports.default = VehicleFactory;
