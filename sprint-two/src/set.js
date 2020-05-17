var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

// An .add() method, takes any string and adds it to the set
setPrototype.add = function(item) {
  // Add input string as key in object
  this._storage[item] = true;
};

// A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
setPrototype.contains = function(item) {
  // Use .hasOwnProperty to check if item exists in object
  return this._storage.hasOwnProperty(item);
};

// A .remove() method, takes any string and removes it from the set, if present
setPrototype.remove = function(item) {
  // Do property look up
  // Remove if defined
  if (this._storage.hasOwnProperty(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
