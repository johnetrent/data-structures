import Node from './node';
import Queue from '../Queue';

export default function Tree(data) {
  this.root = new Node(data);
}

Tree.prototype.traverseDF = function(callback) {

  (function recurse(currentNode) {
    for (let i = 0; i < currentNode.children.length; i++) {
      recurse(currentNode.children[i]);
    }

    callback(currentNode);

  })(this.root);

};

Tree.prototype.traverseBF = function(callback) {
  const queue = new Queue();

  queue.enqueue(this.root);

  let currentTree = queue.dequeue();

  while (currentTree) {
    for (let i = 0; i < currentTree.children.length; i++) {
      queue.enqueue(currentTree.children[i]);
    }

    // eslint-disable-next-line callback-return
    callback(currentTree);
    currentTree = queue.dequeue();
  }
};

Tree.prototype.contains = function(callback, traversal) {
  traversal.call(this, callback);
};

Tree.prototype.add = function(data, toData, traversal) {
  const child = new Node(data);
  let parent = null;
  const callback = function(node) {
    if (node.data === toData) {
      parent = node;
    }
  };

  this.contains(callback, traversal);
  if (parent) {
    parent.children.push(child);
    child.parent = parent;
  } else {
    throw new Error('Cannot add node to a non-existent parent.');
  }
};

Tree.prototype.remove = function(data, fromData, traversal) {
  let parent = null;
  let childToRemove = null;
  let index;

  const callback = function(node) {
    if (node.data === fromData) {
      parent = node;
    }
  };

  this.contains(callback, traversal);

  if (parent) {
    index = findIndex(parent.children, data);

    if (index === undefined) {
      throw new Error('Node to remove does not exist.');
    } else {
      childToRemove = parent.children.splice(index, 1);
    }
  } else {
    throw new Error('Parent does not exist.');
  }

  return childToRemove;
};

function findIndex(arr, data) {
  let index;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].data === data) {
      index = i;
    }
  }

  return index;
}
