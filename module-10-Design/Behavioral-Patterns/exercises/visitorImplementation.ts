interface Role{
    accept(visitor: Visitor): object;
}

class User implements Role{
    public id: number;
    public name: string;
    public password: string;

    public constructor(id: number, name: string, password: string){
        this.id = id;
        this.name = name;
        this.password = password;
    }

    accept(visitor: Visitor): object {
        return visitor.visitUser(this)
    }
}

class Asset implements Role{
    public serialNumber: number;
    public owner: string;
    public rating: number;

    public constructor(serialNumber: number, owner: string, rating: number){
        this.serialNumber = serialNumber;
        this.owner = owner;
        this.rating = rating;
    }

    accept(visitor: Visitor): object {
        return visitor.visitAsset(this)
    }
}

class Group implements Role{
    public id: number;
    public size: number;

    public constructor(id: number, size: number){
        this.id = id;
        this.size = size;
    }

    accept(visitor: Visitor): object {
        return visitor.visitGroup(this)
    }
}

interface Visitor{
    visitUser(user: User): object;
    visitAsset(asset: Asset): object;
    visitGroup(group: Group): object;
}

class JsonExporter implements Visitor{
    visitUser(user: User) {
        return {"id": user.id, "name": user.name, "password": user.password}
    }

    visitAsset(asset: Asset) {
        return {"serialNumber": asset.serialNumber, "owner": asset.owner, "rating": asset.rating}
    }

    visitGroup(group: Group) {
        return {"id": group.id, "size": group.size}
    }
}



let roles: Role[] = []
roles.push(new User(1, 'dekel', '123'))
roles.push(new Asset(99, 'Dani', 12))
roles.push(new Group(5, 44))

const jsonExporter = new JsonExporter();

for(const role of roles){
    console.log(role.accept(jsonExporter))
}

