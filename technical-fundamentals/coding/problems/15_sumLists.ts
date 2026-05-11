// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumLists(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  let carry = 0;
  let p1 = list1;
  let p2 = list2
  const newList = new LinkedList<number>();
  let sum;
  let digit; 

  while (p1 || p2) {
    sum = (p1?.value ?? 0) + (p2?.value ?? 0) + carry
    if (sum <= 9) {
      newList.push(sum)
      carry = 0
    } else {
      carry = 1
      digit = sum % 10
      newList.push(digit)
    }
    p1 = p1?.next
    p2 = p2?.next
  }

  if (carry == 1) {
    newList.push(1)
  }

  return newList.head
}
