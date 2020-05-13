var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var count = 0;
  var first = 0;
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (count - first === 0) {
      return undefined;
    }

    var result = storage[first];
    delete storage[first];
    first++;
    return result;
  };

  someInstance.size = function() {
    return count - first;
  };

  return someInstance;
};
