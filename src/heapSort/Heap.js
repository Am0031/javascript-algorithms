class Heap {
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

  sort() {
    const sorted = [];
    const heap = [...this.heap];
    for (let i = 0; i < heap.length; i++) {
      sorted.push(this.delete());
    }
    return sorted;
  }
}

module.exports = Heap;
