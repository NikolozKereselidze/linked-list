class Node {
  constructor(value = null, link = null) {
    this.value = value;
    this.link = link;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    console.log(currentNode.link);
    while (currentNode.link !== null) {
      currentNode = currentNode.link;
    }
    currentNode.link = newNode;
  }

  prepend(value) {}

  size() {}
  head() {}
  tail() {}
  at(index) {}
  pop() {}
  contains(value) {}
  find(value) {}
  toString() {}
}

const list = new LinkedList();
list.append(20);
list.append(30);
