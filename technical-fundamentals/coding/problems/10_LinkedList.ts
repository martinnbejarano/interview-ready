// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;

  constructor(head?: Node<T>) {
    this.head = head
    this.tail = head
  }

  push(value: T) {
    const node = { value }
  
    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }
  
    this.tail!.next = node
    this.tail = node
  }

  unshift(value: T) {
    const node = { value, next: this.head }

    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }

    this.head = node
  }

  filter(fn: (node: Node<T>, index?: number) => boolean): LinkedList<T>  {
    let index = 0
    const list = new LinkedList<T>()
    let p = this.head
    while (p) {
      if (fn(p, index)) {
        list.push(p.value)
      }
      index ++
      p = p.next
    }
    return list
    
  }
  visit(fn: (node?: Node<T>, index?: number) => void): LinkedList<T> {
    let p = this.head
    let index = 0
    while (p) {
      fn(p, index)
      p = p.next
      index ++
    }

    return this
  }

  getLength(): number {
    let count = 0
    this.visit(() => {
      count ++
    })
    return count
  }

  merge(list: LinkedList<T>): LinkedList<T> {
    const newList = new LinkedList<T>()
    let p = this.head
    while (p) {
      newList.push(p.value)
       p = p.next
    }

    p = list.head
    while (p) {
      newList.push(p.value)
      p = p.next
    }

    return newList
  }

  remove() {}
  print() {}

  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}
  length: number;
}

const list = new LinkedList();
