const Heap = require("./Heap");

class MaxHeap extends Heap {
  constructor(array) {
    super();

    //create the heap from the array (binary tree with max at top)
    for (let i = 0; i < array.length; i++) {
      this.insert(array[i]);
    }
  }

  //method to create a heap with max at top
  insert(item) {
    this.heap.push(item);
    var index = this.heap.length - 1;
    var parent = this.parentIndex(index);
    while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
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
      (this.heap[leftChild] && this.heap[leftChild] > this.heap[index]) ||
      this.heap[rightChild] > this.heap[index]
    ) {
      var max = leftChild;
      if (this.heap[rightChild] && this.heap[rightChild] > this.heap[max]) {
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

module.exports = MaxHeap;
