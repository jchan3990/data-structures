var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // .children property, an array containing a number of subtrees
  // change to an empty array to contain subtrees
  newTree.children = [];  // fix me

  // extend from sources to destination (tree methods to new tree)
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // every node is a potential tree
  // create variable to hold new node (or a potential tree)
  var subTree = Tree(value);
  // point to parent node by adding to it's children array (this)
  this.children.push(subTree);

};

treeMethods.contains = function(target) {

  var result = false;

  // find target value in node object
  var findTarget = function(childArray) {
    // Search the children = array of objects
    for (var i = 0; i < childArray.length; i++) {
      // Base case = check if target is equal to node value
      var currentNode = childArray[i];
      if (currentNode.value === target) {
        result = true;
      } else {
        // recursive case: search children of current node obj
        findTarget(currentNode.children);
      }
    }
  }
  findTarget(this.children);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
