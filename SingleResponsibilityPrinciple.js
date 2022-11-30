class CalorieTracker {
  constructor(maxCal) {
    this.maxCal = maxCal;
    this.currentCal = 0;
  }

  trackCalories(value) {
    this.currentCal += value;
    if (this.currentCal > this.maxCal) {
      logCal("Max calories exceeded");
    }
  }
}

// should be in another file
function logCal(message) {
  console.log(message);
}

const calTracker = new CalorieTracker(2000);
calTracker.trackCalories(1000);
calTracker.trackCalories(500);
calTracker.trackCalories(700);
