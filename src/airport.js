var Airport = function() {
  this.capacity = 3;
  this.planes = [];
  this.full = false
};

Airport.prototype.dock = function(plane) {
  this.planes.push(plane);
  plane.land();
};

Airport.prototype.count_planes = function() {
  this.planes.length
};

Airport.prototype.checkIfFull = function() {
  if (this.planes.length >= this.capacity) {
    this.full = true;
  } else {
    this.full = false;
  };
};
