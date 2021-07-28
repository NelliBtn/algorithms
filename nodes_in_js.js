class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

const firstNode = new Node(5);

console.log(firstNode.next)

module.exports = Node;
