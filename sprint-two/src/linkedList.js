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
    // Check if list is empty
    if (list.head === null) {return};
    // Create variable to store current head.
    var currentHead = list.head; // a
    // Create variable to hold new head
    var newHead = list.head.next;
    // Remove current head node
    delete list.head;
    // Update head to next head
    list.head = newHead;
    // Returns removed head value
    return currentHead.value;
  };

  list.contains = function(target) {
    // Traverse the linked List until no more nodes
    var n = list.head;
    while ( n !== null) {
      // If contains target (value), return true
      if (n.value === target) {
        return true;
      }
      n = n.next;
    }
    return false;
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
