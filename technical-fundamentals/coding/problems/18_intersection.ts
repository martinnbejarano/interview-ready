// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function intersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined,
): Node<T> | undefined {
  let p1 = list1
  let p2 = list2
  const set = new Set()
  
  while (p1) {
    set.add(p1)
    p1 = p1.next
  }

  while (p2) {
    if (set.has(p2)) {
      return p2
    }
    p2 = p2.next
  }
  return undefined
}
