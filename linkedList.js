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
      this.head.setNextNode(currentHead);
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

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) { // if no head list is empty
      return;
    }
    this.head = this.head.getNextNode(); // set head to the next node
    return removedHead.data; // return original head DATA
  }

  printList() {
    let currentNode = this.head; // start from head
    let output = '<head> '; // create a string that holds the data from every node
    while (currentNode) { // while there is a current node
      output += currentNode.data + ' '; // concat it to output
      currentNode = currentNode.getNextNode(); // set current node to the next one
    }
    output += '<tail>'; // finish with 'tail'
    console.log(output);
  }
}


module.exports = LinkedList;