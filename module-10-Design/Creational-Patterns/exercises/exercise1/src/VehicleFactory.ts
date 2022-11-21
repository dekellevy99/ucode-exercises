import {VehicleType} from './Vehicles/Vehicle'
import Boat from './Vehicles/Boat'
import Taxi from './Vehicles/Taxi'
import Bus from './Vehicles/Bus'
import Plane from './Vehicles/Plane'


class VehicleFactory{
    private static instance: VehicleFactory;

    private constructor(){};

    public static getVehicleFactoryInstance(){
        if(!VehicleFactory.instance){
            VehicleFactory.instance = new VehicleFactory();
        }
        return VehicleFactory.instance
    }

    public createVehicle(type: VehicleType){
        switch (type) {
            case VehicleType.PLANE:
              return new Plane();

            case VehicleType.BOAT:
              return new Boat();

            case VehicleType.TAXI:
              return new Taxi();
              
            case VehicleType.BUS:
                return new Bus();
        }
    }
}

export default VehicleFactory