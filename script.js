// Complete the js code
//car constructor function
function Car(make, model) {
	 this.make = make;
  this.model = model;
}


// Add getMakeModel method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

//sportsCar Constructor function
function SportsCar(make, model, topSpeed) {
	// Call the Car constructor to inherit make and model
  Car.call(this, make, model);
  
  // Add topSpeed property specific to SportsCar
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype in SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Add getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
