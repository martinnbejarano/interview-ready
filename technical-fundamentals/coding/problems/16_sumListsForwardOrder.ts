// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295
// Output:9 -> 1 -> 2,Thatis,912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  if (!list1 && !list2) return undefined
  const l1 = new LinkedList<number>(list1)
  const l2 = new LinkedList<number>(list2)
  let sum1 = ""
  let sum2 = ""
  l1.visit((node) => {
    sum1 += node?.value ?? ""
  })

  l2.visit((node) => {sum2 += node?.value ?? ""});

  const newList = new LinkedList<number>();
  (Number(sum1) + Number(sum2)).toString().split("").forEach((x) => {
    newList.push(Number(x))
  })

  return newList.head

}
