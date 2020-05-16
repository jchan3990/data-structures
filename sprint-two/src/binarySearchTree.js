// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.

//var BinarySearchTree = function(value) {
//};

// Use ES6 instantiation pattern
class BinarySearchTree {
  constructor(value) {
    this.tree = {};
    this.tree.value = value;
    // this.tree.children = [];
    this.tree.left;
    this.tree.right;
  }

  // A .insert() method, which accepts a value and places it in the tree in the correct position.
  insert(value) {
      var childNode = new BinarySearchTree(value);
      // ChildNode.value = 5


      // helper function to intake current node
      var searchTree = function(currentNode) {

        // var node = { val: 5
                        // left: { val: 2
                        //         left: 1
                        //         right: {}       }}

        // base case is when currentNode is {}
          // insert node

        // recursive to keep checking left or right going down
        if (value < currentNode.value) { // 3 > 2 node --> skip
          searchTree(currentNode.left);  //
          return currentNode.value = new BinaryTree(value);
        }
        if (value > currentNode.value) {  // 3 > 2 node
          searchTree(currentNode.right); // right of 2 node.right = {} // nothing
          return currentNode.value = new BinaryTree(value);
        }

        // return;
        // var previousnode = insert that

        // if (value < currentNode.value)
        //   currentNode.left = currentNode;
        //     currentNode.left = new BinaryTree(value)

        // if (value > currentNode.value)
        //   currentNode.left = currentNode;
      // at current node, check if value less than current node value

        // access the left property of the current node, and you'll be at an object
        // check again if you're less than or greater than that current node
        // if there's nothing there, then you insert
        // if both left and right properties don't exist, then insert
      // check if greater

      //
    }
    searchTree(this.tree);

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
