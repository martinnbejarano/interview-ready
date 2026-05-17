// 5. *Validate BST*:

// Implement a function to check if a binary tree is a binary search tree.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

function dfs(
  node: TreeNode<number> | undefined,
  min: number,
  max: number,
): boolean {
  if (node == null) return true;
  if (node.value <= min || node.value >= max) return false;
  return (
    dfs(node.left, min, node.value) && dfs(node.right, node.value, max)
  );
}

export default function validateBST(
  node: TreeNode<number> | undefined,
): boolean {
  return dfs(node, -Infinity, Infinity);
}
