"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Boat {
    transport(passenger) {
        console.log(`${passenger.name} was transferred successfully on ${this.constructor.name}`);
    }
}
exports.default = Boat;
