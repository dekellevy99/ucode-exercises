class Car {
    constructor() {
      this.stopped = true;
    }
  
    turn(direction) {
      if (this.stopped) {
        console.log("Can't turn while stopped");
      } else {
        console.log(`Turning ${direction}`);
      }
    }
  
    stop() {
      if (this.stopped) {
        console.log('Already stopped');
      } else {
        this.stopped = true;
        console.log('Stopping');
      }
    }
  
    go() {
      if (!this.stopped) {
        console.log('Already going');
      } else {
        this.stopped = false;
        console.log('Going...');
      }
    }
  }
  
  class Command {
    constructor(car) {
      this.car = car;
    }
  
    execute() {}
  }
  
  class TurnLeftCommand extends Command {
    constructor(car) {
      super(car);
    }
  
    execute() {
      this.car.turn('Left');
    }
  }
  
  class TurnRightCommand extends Command {
    constructor(car) {
      super(car);
    }
  
    execute() {
      this.car.turn('Right');
    }
  }
  
  class GoCommand extends Command {
    constructor(car) {
      super(car);
    }
  
    execute() {
      this.car.go();
    }
  }
  
  class StopCommand extends Command {
    constructor(car) {
      super(car);
    }
  
    execute() {
      this.car.stop();
    }
  }
  
  class PathExecutor {
    constructor() {
      this.commands = [];
    }
  
    queueCommand(command) {
      this.commands.push(command);
    }
  
    executeAll() {
      for (const command of this.commands) {
        command.execute();
      }
    }
  }
  
  const myCar = new Car();
  const pathExecutor = new PathExecutor();
  pathExecutor.queueCommand(new GoCommand(myCar));
  pathExecutor.queueCommand(new TurnRightCommand(myCar));
  pathExecutor.queueCommand(new TurnRightCommand(myCar));
  pathExecutor.queueCommand(new TurnLeftCommand(myCar));
  pathExecutor.queueCommand(new StopCommand(myCar));
  pathExecutor.executeAll();
  