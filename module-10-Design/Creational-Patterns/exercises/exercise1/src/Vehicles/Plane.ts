import Vehicle from "./Vehicle";
import Passenger from "../Passenger";

class Plane implements Vehicle{
    transport(passenger: Passenger): void{
        console.log(`${passenger.name} was transferred successfully on ${this.constructor.name}`);
    }

}

export default Plane