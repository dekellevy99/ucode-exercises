import Vehicle from "./Vehicle";
import Passenger from "../Passenger";

class Taxi implements Vehicle{
    transport(passenger: Passenger): void{
        console.log(`${passenger.name} was transferred successfully on ${this.constructor.name}`);
    }

}

export default Taxi