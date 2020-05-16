// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.

//var BinarySearchTree = function(value) {
//};

// Use ES6 instantiation pattern
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    // this.tree.children = [];
    this.left = undefined;
    this.right = undefined;
  }

  // A .insert() method, which accepts a value and places it in the tree in the correct position.
  insert(value) {
    var node = new BinarySearchTree(value);

    var addNode = function(currentNode) {
      if (currentNode.value > value && currentNode.left === undefined) {
        currentNode.left = node;
      } else if (currentNode.value > node.value) {
        addNode(currentNode.left);
      } else if (currentNode.value < node.value && currentNode.right === undefined) {
        currentNode.right = node;
      } else if (currentNode.value < node.value) {
        addNode(currentNode.right);
      }
    }

    addNode(this);
  }

  // A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  contains(value) {
    var doesContain = false;

    // Helper function
    var ifContains = function(tree) {
      if (tree.value === value) {
        doesContain = true;
      } else if (tree.left !== undefined && tree.value > value) {
        ifContains(tree.left);
      } else if (tree.right !== undefined && tree.value < value) {
        ifContains(tree.right);
      }
    }

    ifContains(this);
    return doesContain;
  }

  // A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
  depthFirstLog(cb) {
    //Helper function
    var runCb = function(tree) {
      cb(tree.value)
      if (tree.left !== undefined) {
        runCb(tree.left);
      }
      if (tree.right !== undefined) {
        runCb(tree.right);
      }
    }

    runCb(this);
  }

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
