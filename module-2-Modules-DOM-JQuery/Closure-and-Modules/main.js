const foo = function () {
    const x = 1
  
    const bar = function () {
      console.log(x) //notice this inner function using the outer function's variable
    }
  
    return bar
  }
  
  const baz = foo() //out here, x doesn't exist
  baz() //but when we invoke baz, we're printing x!

  // -----------------------------------------
  const setCounter = function (num) {
    let counter = 0
  
    const count = function () {
      counter += num;
      console.log(counter)
    }
  
    return count
  }
  
  const increment = setCounter(2)
  increment()

  // ------------------------------------------
  const family = function(){
    const members = [];
    const birth = function(name){
        members.push(name);
        console.log(members);
    }

    return birth;
  }

  let givenBirth = family();
  givenBirth("dekel")
  givenBirth("dani")
  givenBirth("yellow")

  //--------------------------------------------
  const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }

    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}

const mathModule = mathOperations();
let addFunc = mathModule.add;
console.log(addFunc(13, 29))
console.log(mathModule['sub'](10,2))
console.log(mathModule.mult(1.75, 24))
console.log(mathModule.mult(7, mathModule.div(36, 6)))

//-----------------------------------------------
const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers,
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()
usersModule.addUser("Dani")
usersModule.addUser("Beni")
usersModule.listUsers()
console.log(usersModule._users)

