export default function Node(data) {
  this.data = data;
  this.next = null;
}

Node.prototype.setNext = function(node) {
  this.next = node;
};
