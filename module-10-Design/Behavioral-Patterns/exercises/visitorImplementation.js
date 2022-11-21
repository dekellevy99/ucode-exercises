"use strict";
class User {
    constructor(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
    accept(visitor) {
        return visitor.visitUser(this);
    }
}
class Asset {
    constructor(serialNumber, owner, rating) {
        this.serialNumber = serialNumber;
        this.owner = owner;
        this.rating = rating;
    }
    accept(visitor) {
        return visitor.visitAsset(this);
    }
}
class Group {
    constructor(id, size) {
        this.id = id;
        this.size = size;
    }
    accept(visitor) {
        return visitor.visitGroup(this);
    }
}
class JsonExporter {
    visitUser(user) {
        return { "id": user.id, "name": user.name, "password": user.password };
    }
    visitAsset(asset) {
        return { "serialNumber": asset.serialNumber, "owner": asset.owner, "rating": asset.rating };
    }
    visitGroup(group) {
        return { "id": group.id, "size": group.size };
    }
}
let roles = [];
roles.push(new User(1, 'dekel', '123'));
roles.push(new Asset(99, 'Dani', 12));
roles.push(new Group(5, 44));
const jsonExporter = new JsonExporter();
for (const role of roles) {
    console.log(role.accept(jsonExporter));
}
