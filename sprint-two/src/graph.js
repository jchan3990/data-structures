

// Instantiate a new graph
var Graph = function() {
  // creates an object container
  this.vertices = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // add an object node to the graph with a key value of node
  this.vertices[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // Check if key exists and return bool
  return this.vertices.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // check that node and see if edge has properties
  var edgeList = Object.keys(this.vertices[node]);

  // iterate over the array of nodes
  for (var i = 0; i < edgeList.length; i++) {
    // go to index[i] node and remove that association
    delete this.vertices[edgeList[i]][node];
  }

  // delete target node from graph
  delete this.vertices[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // Check the nodes to see if the they have the adjacent edges
  if (this.vertices[fromNode].hasOwnProperty(toNode) && this.vertices[toNode].hasOwnProperty(fromNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // input: two nodes
  // Add adjacent nodes as keys to their corresponding nodes with the value of true
  this.vertices[fromNode][toNode] = true;
  this.vertices[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // delete appropriate edge property (connection) two both node
  delete this.vertices[fromNode][toNode];
  delete this.vertices[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // this is how we traverse the graph
  // Create variable to hold all node values in an array
  var allNodes = Object.keys(this.vertices);

  // Iterate through array
  for (var i = 0; i < allNodes.length; i++) {
    cb(allNodes[i]);
  }
  // Call callback on each item
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


