/* 
class Bird {
  // ...
  getSpeed(): number {
    switch (type) {
      case EUROPEAN:
        return getBaseSpeed();
      case AFRICAN:
        return getBaseSpeed() - getLoadFactor() * numberOfCoconuts;
      case NORWEGIAN_BLUE:
        return (isNailed) ? 0 : getBaseSpeed(voltage);
    }
    throw new Error("Should be unreachable");
  }
}
*/


abstract class Bird {
    // ...
    abstract getSpeed(): number;
  }
  
  class European extends Bird {
    getSpeed(): number {
      return getBaseSpeed();
    }
  }
  class African extends Bird {
    getSpeed(): number {
      return getBaseSpeed() - getLoadFactor() * numberOfCoconuts;
    }
  }
  class NorwegianBlue extends Bird {
    getSpeed(): number {
      return (isNailed) ? 0 : getBaseSpeed(voltage);
    }
  }
  
  // Somewhere in client code
  let speed = bird.getSpeed();