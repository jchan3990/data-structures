class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.first = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    if (this.count - this.first === 0) {
      return undefined;
    }

    var result = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return result;
  }

  size() {
    return this.count - this.first;
  }

}
