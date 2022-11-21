enum Direction {
    Left,
    Right,
  }
  
  class Car {
    private stopped: boolean = true;
  
    turn(direction: Direction): void {
      if (this.stopped) {
        console.log("Can't turn while stopped");
      } else {
        console.log(`Turning ${Direction[direction]}`);
      }
    }
  
    stop(): void {
      if (this.stopped) {
        console.log('Already stopped');
      } else {
        this.stopped = true;
        console.log('Stopping');
      }
    }
  
    go(): void {
      if (!this.stopped) {
        console.log('Already going');
      } else {
        this.stopped = false;
        console.log('Going...');
      }
    }
  }

  abstract class Command {
    protected car: Car;
  
    constructor(car: Car) {
      this.car = car;
    }
  
    abstract execute(): void;
  }

  //There are also TurnRight, go, stop etc..
  class TurnLeftCommand extends Command {
    constructor(car: Car) {
      super(car);
    }
  
    execute(): void {
      this.car.turn(Direction.Left);
    }
  }

  class PathExecutor {
    private commands: Command[] = [];
  
    queueCommand(command: Command): void {
      this.commands.push(command);
    }
  
    executeAll(): void {
      for (const command of this.commands) {
        command.execute();
      }
    }
  }

  const myCar: Car = new Car();
const pathExecutor: PathExecutor = new PathExecutor();
pathExecutor.queueCommand(new GoCommand(myCar));
pathExecutor.queueCommand(new TurnRightCommand(myCar));
pathExecutor.queueCommand(new TurnRightCommand(myCar));
pathExecutor.queueCommand(new TurnLeftCommand(myCar));
pathExecutor.queueCommand(new StopCommand(myCar));
pathExecutor.executeAll();