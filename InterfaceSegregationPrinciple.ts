/*
interface VehicleInterface {
  drive(): string;
  fly(): string;
}

class FutureCar implements VehicleInterface {
  public drive() : string {
    return 'Driving Car.';
  }

  public fly() : string {
    return 'Flying Car.';
  }
}

class Car implements VehicleInterface {
  public drive() : string {
    return 'Driving Car.';
  }

  public fly() : string {
    throw new Error('Not implemented method.');
  }
}

class Airplane implements VehicleInterface {
  public drive() : string {
    throw new Error('Not implemented method.');
  }
  
  public fly() : string {
    return 'Flying Airplane.';
  }
}
*/

interface CarInterface {
    drive() : string;
  }
  
  interface AirplaneInterface {
    fly() : string;
  }
  
  class FutureCar implements CarInterface, AirplaneInterface {
    public drive() {
        return 'Driving Car.';
    }
  
    public fly() {
        return 'Flying Car.'
    }
  }
  
  class Car implements CarInterface {
    public drive() {
        return 'Driving Car.';
    }
  }
  
  class Airplane implements AirplaneInterface {
    public fly() {
        return 'Flying Airplane.';
    }
  }