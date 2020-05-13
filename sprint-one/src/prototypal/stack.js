var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.count = 0;

  return stack;
};

var stackMethods = {

  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  pop: function() {
    if (this.count === 0) {
      return undefined
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  },

  size: function() {
    return this.count;
  }
};


