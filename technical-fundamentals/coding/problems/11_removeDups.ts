// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  const set = new Set()
  const list = new LinkedList(head)

  const res = list.filter((node) => {
    if (set.has(node.value)) {
      return false
    } else {
      set.add(node.value)
      return true
    }
  })

  return res.head
}

// export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
//   if (!head) return undefined;
//   let set = new Set();
//   let p = head;
//   set.add(p.value);

//   while (p) {
//     if (!p.next) {
//       break;
//     }
//     if (set.has(p.next.value)) {
//       p.next = p.next.next;
//     } else {
//       set.add(p.next.value);
//       p = p.next;
//     }
//   }
//   return head;
// }
