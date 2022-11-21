"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Passenger_1 = __importDefault(require("./Passenger"));
const TravelAgency_1 = __importDefault(require("./TravelAgency"));
const Vehicle_1 = require("./Vehicles/Vehicle");
const NUM_BUSES = 4;
const NUM_TAXIS = 8;
const NUM_BOATS = 3;
const NUM_PLANES = 1;
let travelAgency = new TravelAgency_1.default(NUM_BOATS, NUM_TAXIS, NUM_PLANES, NUM_BUSES);
let passenger = new Passenger_1.default("Shlomi", Vehicle_1.VehicleType.PLANE);
let vehicle = travelAgency.assignVehicleToPassenger(passenger);
vehicle === null || vehicle === void 0 ? void 0 : vehicle.transport(passenger);
