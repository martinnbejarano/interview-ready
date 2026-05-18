// 4. *Check Balanced*:

// Implement a function to check if a binary tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree
// such that the heights of the two subtrees of any node never differ by more than one.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

/** Returns height, or -1 if subtree is not balanced. */
function height<T>(node: TreeNode<T> | null | undefined): number {
  if (node == null) return 0;

  const left = height(node.left);
  if (left === -1) return -1;

  const right = height(node.right);
  if (right === -1) return -1;

  if (Math.abs(left - right) > 1) return -1;

  return Math.max(left, right) + 1;
}

export default function checkBalanced<T>(tree?: TreeNode<T> | null): boolean {
  return height(tree ?? null) !== -1;
}
