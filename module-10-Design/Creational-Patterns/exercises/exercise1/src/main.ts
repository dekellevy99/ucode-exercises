import Passenger from "./Passenger";
import TravelAgency from "./TravelAgency";
import { VehicleType } from "./Vehicles/Vehicle";
const NUM_BUSES = 4
const NUM_TAXIS = 8
const NUM_BOATS = 3
const NUM_PLANES = 1


let travelAgency = new TravelAgency(NUM_BOATS, NUM_TAXIS, NUM_PLANES, NUM_BUSES);
let passenger = new Passenger("Shlomi", VehicleType.PLANE)
let vehicle = travelAgency.assignVehicleToPassenger(passenger)
vehicle?.transport(passenger)