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
  var subtree = Tree(value);
  // point to parent node by adding to it's children array (this)
  this.children.push(subtree);

};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
