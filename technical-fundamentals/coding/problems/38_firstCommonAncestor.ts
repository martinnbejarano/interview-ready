// 8. *First Common Ancestor*:

// Design an algorithm and write code to find the first common ancestor of two nodes
// in a binary tree. Avoid storing additional nodes in a data structure.
// NOTE: This is not necessarily a binary search tree.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function firstCommonAncestor<T>(
  root: TreeNode<T> | undefined,
  p: TreeNode<T>,
  q: TreeNode<T>,
): TreeNode<T> | undefined {
  if (!root) { return }

  if (root.value == q.value || root.value == p.value) {
    return root
  }

  const l = firstCommonAncestor(root.left, p, q)
  const r = firstCommonAncestor(root.right, p, q)

  if (l && r) {
    return root
  } 

  return l || r



}
