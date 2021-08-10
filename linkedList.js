const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      newHead.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) { // the list is empty
      this.head = new Node(data); // create tail and head with data
    } else { // the list is not empty
      while (tail.getNextNode()) { // iterate the list until we find the end
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data)); // when iteration is over, the tail equals a new node with data arg
    }
  }
}


module.exports = LinkedList;