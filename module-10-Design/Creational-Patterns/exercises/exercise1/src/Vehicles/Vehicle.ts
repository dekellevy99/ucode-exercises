import Passenger from '../Passenger'

export enum VehicleType{
    PLANE,
    BOAT,
    BUS,
    TAXI
}

export default interface Vehicle{
    transport(passenger: Passenger): void;  
}