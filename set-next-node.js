class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('not a node');
    }
  }

  getNextNode() {
    return this.next;
  }

}

const firstNode = new Node('I am an instance of a Node!');
const secondNode = new Node('second instance');
firstNode.setNextNode(secondNode);

console.log(firstNode)

module.exports = Node;
