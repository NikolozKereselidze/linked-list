class Node {
  constructor(value = null, link = null) {
    this.value = value;
    this.link = link;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.length++;
      return;
    }

    let currentNode = this.head;
    while (currentNode.link !== null) {
      currentNode = currentNode.link;
    }
    currentNode.link = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.length++;
      return;
    }
    newNode.link = this.head;
    this.head = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }
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
list.prepend(40);
list.size();
