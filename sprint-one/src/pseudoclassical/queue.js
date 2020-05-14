var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count - this.first === 0) {
    return undefined;
  }

  result = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return result;
};

Queue.prototype.size = function () {
  return this.count - this.first;
};


