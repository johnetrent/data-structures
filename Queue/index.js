export default function Queue(first, ...rest) {
  this.oldestIndex = 1;
  this.newestIndex = 1;
  this.storage = new Map();
  [].concat(first, rest).forEach(::this.enqueue);
}

Queue.prototype.size = function() {
  return this.newestIndex - this.oldestIndex;
};

Queue.prototype.enqueue = function(data) {
  if (typeof data === 'undefined') return;
  this.storage.set(this.newestIndex, data);
  this.newestIndex++;
};

Queue.prototype.dequeue = function() {
  const {oldestIndex, newestIndex} = this;
  if (oldestIndex !== newestIndex) {
    const deletedData = this.storage.get(oldestIndex);
    this.storage.delete(oldestIndex);
    this.oldestIndex++;
    return deletedData;
  }
};

Queue.prototype.peek = function() {
  return this.storage.get(this.oldestIndex);
};

Queue.prototype.isEmpty = function() {
  return this.storage.size === 0;
};
