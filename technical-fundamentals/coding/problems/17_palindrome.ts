// 7. *Palindrome*:

// Implement a function to check if a linked list is a palindrome.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function isPalindrome<T>(head: Node<T> | undefined): boolean {
  let p = head
  const stack = []
  while (p) {
    stack.push(p.value)
    p = p.next
  }

  p = head
  while (p) {
    if (stack.pop() !== p.value) {
      return false
    }
    p = p.next
  }

  return stack.length == 0
}
