class Node {
    constructor (value) {
      this.value = value;
      this.next = null;
    }
}

class Stack {
    constructor () {
      this.head = null;
      this.length = 0;
    }

    push(value) {
      const node = new Node(value);

      if (this.head) {
        node.next = this.head;
        this.head = node;
      } else {
        this.head = node;
      }

      this.length++;
    }

    pop() {
      const current = this.head;
      this.head = this.head.next;
      this.length--;

      return current.value;
    }

    peek() {
      return this.head.value;
    }

    isEmpty() {
      return this.length === 0;
    }

    size() {
      return this.length;
    }

    print() {
      let current = this.head;
  
      while(current) {
        console.log(current.value);
        current = current.next;
      }
    }
}