"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Passenger {
    constructor(name, favoriteVehicle) {
        this._name = name;
        this._favoriteVehicle = favoriteVehicle;
    }
    get name() {
        return this._name;
    }
    get favoriteVehicle() {
        return this._favoriteVehicle;
    }
    set name(name) {
        this._name = name;
    }
    set favoriteVehicle(favoriteVehicle) {
        this._favoriteVehicle = favoriteVehicle;
    }
}
exports.default = Passenger;
