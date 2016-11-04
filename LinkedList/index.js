import Node from './node';

export default function LinkedList(first, ...rest) {
  this.head = null;
  this.length = 0;

  [].concat(first, rest).forEach(::this.add);
}

LinkedList.prototype.add = function(value) {
  if (typeof value === 'undefined') return;
  const node = new Node(value);
  let currentNode = this.head;

  if (!currentNode) {
    this.head = node;
    this.length++;
    return node;
  }

  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;
  this.length++;

  return node;
};

LinkedList.prototype.get = function(position) {
  let currentNode = this.head;
  const message = {
    failure: 'Failure: non-existent node in this list.',
  };

  if (this.length === 0 || position < 1 || position > this.length) {
    throw new Error(message.failure);
  }

  let count = 1;
  while (count < position) {
    currentNode = currentNode.next;
    count++;
  }

  return currentNode;
};

LinkedList.prototype.remove = function(position) {
  let currentNode = this.head;
  const message = {
    failure: 'Failure: non-existent node in this list.',
  };

  // 1st use-case: an invalid position
  if (position < 0 || position > this.length) {
    throw new Error(message.failure);
  }

  // 2nd use-case: the first node is removed
  if (position === 1) {
    this.head = currentNode.next;
    const deletedNode = currentNode;
    this.length--;

    return deletedNode;
  }

  // 3rd use-case: any other node is removed
  let count = 2;
  while (count < position) {
    currentNode = currentNode.next;
    count++;
  }

  const beforeNodeToDelete = currentNode;
  const deletedNode = currentNode.next;
  beforeNodeToDelete.next = currentNode.next.next;
  this.length--;

  return deletedNode;
};

LinkedList.prototype.toArray = function() {
  let currentNode = this.head;
  let array = [].concat(currentNode.data);

  while (currentNode.next) {
    currentNode = currentNode.next;
    array = array.concat(currentNode.data);
  }

  return array;
};
