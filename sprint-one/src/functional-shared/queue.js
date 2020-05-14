var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.count = 0;
  queue.first = 0;

  _.extend(queue, queueMethods);

  return queue;
};

  var queueMethods = {};

  queueMethods.enqueue = function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  queueMethods.dequeue = function() {
    if (this.count - this.first === 0) {
      return undefined;
    }

    var result = this.storage[this.first]
    delete this.storage[this.first];
    this.first++;
    return result;
  },

  queueMethods.size= function() {
    return this.count - this.first
  }


