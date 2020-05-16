

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // Check for collision
  // If not empty,
  var bucket = this._storage.get(index) || [];

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        tuple[1] = v;
      }
    }

    bucket.push([k, v]);
    this._storage.set(index, bucket);

  // firstname input is the key and the lastname output is the value
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // use limitedArray helper function to get value
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    console.log(tuple);
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return tuple[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
//console.log(this._storage.get(index)[0][0])
  // for (var i = 0; i < this._storage.get(index).length; i++) {
  //   if (this._storage.get(index)[i] === k) {
  //     this._storage.get(index).splice(i);
  //   }
  // }
  for (var i = 0; i < this._storage.get(index).length; i++) {
    //console.log(this._storage.get(index)[i]);
    this._storage.get(index)[i].splice(0, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


