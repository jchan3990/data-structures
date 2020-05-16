// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.

//var BinarySearchTree = function(value) {
//};

// Use ES6 instantiation pattern
class BinarySearchTree {
  constructor(value) {
    this.tree = {};
    this.tree.value = value;
    this.tree.children = [];
  }

  // A .left property, a binary search tree (BST) where all values are lower than the current value.
  leftProperty() {
    // Set left property of node to true
    this.tree.left = true;

  }

  // A .right property, a BST where all values are higher than the current value.
  rightProperty() {
    // Set right property of tree to true
    this.tree.right = true;

  }

  // A .insert() method, which accepts a value and places it in the tree in the correct position.
  insert(value) {
    // Helper function to determine where to insert new node
    var insertValue = function (value) {
      // Check value in relations to parent
      // If input value is lesser than root node value
      if (value < this.tree.value) {

      }
      // Insert to the left
      // If input value is greater than root node value
      // Inert to the right
      // Recurse side of the branch
    }
  }

  // A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  contains(value) {
    // Helper function
      // If value is found, return true
      // If value is less than parent, traverse left side
      // If value is greater than parent, traverse right side
      // RECURSE

  }

  // A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
  depthFirstLog() {
    // Helper function
      // Traverse the left side and callback on each value
      // Traverse the right side and callback on each value
  }

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
