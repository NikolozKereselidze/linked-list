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

  nodeHead() {
    return this.head;
  }

  tail() {
    let tempNode = this.head;
    while (tempNode.link !== null) {
      tempNode = tempNode.link;
    }
    return tempNode;
  }

  at(index) {
    let counter = 0;
    let tempNode = this.head;
    while (counter !== index) {
      tempNode = tempNode.link;
      counter++;
    }
    return tempNode;
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    if (this.head.link === null) {
      this.head = null;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.link !== null) {
      previousNode = currentNode;
      currentNode = currentNode.link;
    }
    previousNode.link = null;
  }

  contains(value) {
    let currentNode = this.head;
    let equal = false;
    while (equal === false) {
      if (currentNode.value === value) equal = true;
      if (currentNode.link === null) return equal;
      currentNode = currentNode.link;
    }
    return equal;
  }

  find(value) {
    let currentNode = this.head;
    while (currentNode.link !== null) {
      if (currentNode.value === value) return this.length - 1;
      currentNode = currentNode.link;
    }
    return "Value not found";
  }

  toString() {
    let currentNode = this.head;
    let string = ``;

    while (currentNode !== null) {
      string += `( ${currentNode.value} ) ->`;
      currentNode = currentNode.link;
    }
    string += ` null`;
    return string;
  }
}

const list = new LinkedList();
list.append(20);
list.append(30);
list.prepend(40);
list.size();
list.nodeHead();
list.tail();
list.at(2);
list.pop();
list.contains(40);
list.toString();
