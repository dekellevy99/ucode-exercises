import { faker } from '@faker-js/faker';

const makeHuman = function(number){
    const users = [];
    for(let i = 0; i < number; i++){
        let randomUser = {name: faker.name.fullName(),
                          avatar: faker.image.avatar(),
                          company: faker.company.name()};
        users.push(randomUser);
    }

    return users;
}

const users = makeHuman(5);
users.forEach(human => console.log(human))