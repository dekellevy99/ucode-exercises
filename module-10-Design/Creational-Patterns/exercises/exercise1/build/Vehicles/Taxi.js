"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Taxi {
    transport(passenger) {
        console.log(`${passenger.name} was transferred successfully on ${this.constructor.name}`);
    }
}
exports.default = Taxi;
