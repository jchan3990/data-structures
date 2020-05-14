var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create Node object
    var newNode = Node(value);
    // If list is empty, update both head and tail to new object
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
    // Else tail data/next updates, head next updates to tail node
    // this is the current tail and we're setting the next point to our new node object
    list.tail.next = newNode; // b
    // so now we need to indicate what our new tail is
    list.tail = newNode; // c - re-assigning list.tail
    }
  };

  list.removeHead = function() {

  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
