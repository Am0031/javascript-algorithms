class MinHeap {
  constructor() {
    this.heap = [];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }
  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  insert(item) {
    this.heap.push(item);
    var index = this.heap.length - 1;
    var parent = this.parentIndex(index);
    while (this.heap[parent] && this.heap[parent] > this.heap[index]) {
      this.swap(parent, index);
      index = this.parentIndex(index);
      parent = this.parentIndex(index);
    }
  }
  delete() {
    var item = this.heap.shift();
    this.heap.unshift(this.heap.pop());
    var index = 0;
    var leftChild = this.leftChildIndex(index);
    var rightChild = this.rightChildIndex(index);
    while (
      (this.heap[leftChild] && this.heap[leftChild] < this.heap[index]) ||
      this.heap[rightChild] < this.heap[index]
    ) {
      var max = leftChild;
      if (this.heap[rightChild] && this.heap[rightChild] < this.heap[max]) {
        max = rightChild;
      }
      this.swap(max, index);
      index = max;
      leftChild = this.leftChildIndex(max);
      rightChild = this.rightChildIndex(max);
    }
    return item;
  }
}

module.exports = MinHeap;
