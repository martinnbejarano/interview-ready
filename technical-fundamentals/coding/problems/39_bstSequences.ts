// 9. *BST Sequences*: A binary search tree was created by traversing through an array from left to right and inserting each element.
// Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

// ```
// EXAMPLE Input:
/*
            2
           / \
          1   3
*/
// Output: [[2, 1, 3], [2, 3, 1]]
// ```

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

function weave<T>(
  first: T[],
  second: T[],
  prefix: T[],
  results: T[][],
): void {
  if (first.length === 0 || second.length === 0) {
    results.push([...prefix, ...first, ...second]);
    return;
  }

  weave(first.slice(1), second, [...prefix, first[0]], results);
  weave(first, second.slice(1), [...prefix, second[0]], results);
}

export default function bstSequences<T>(
  root?: TreeNode<T> | null,
): T[][] {
  if (root == null) {
    return [[]];
  }

  const leftSeqs = bstSequences(root.left);
  const rightSeqs = bstSequences(root.right);
  const results: T[][] = [];
  const prefix: T[] = [root.value];

  for (const left of leftSeqs) {
    for (const right of rightSeqs) {
      weave(left, right, prefix, results);
    }
  }

  return results;
}
