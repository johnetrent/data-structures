export default function Stack(first, ...rest) {
  this.size = 0;
  this.storage = [];

  [].concat(first, rest).forEach(::this.push);
}

Stack.prototype.push = function(data) {
  if (typeof data !== 'undefined') {
    this.size++;
    this.storage[this.size] = data;
  }
};

Stack.prototype.pop = function() {
  if (this.size) {
    const deletedData = this.storage[this.size];

    delete this.storage[this.size];
    this.size--;

    return deletedData;
  }
};

Stack.prototype.peek = function() {
  if (this.size) return this.storage[this.size];
  return null;
};

Stack.prototype.isEmpty = function() {
  return this.size === 0;
};
