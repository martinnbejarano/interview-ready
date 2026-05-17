// 6. *Successor*:

// Write an algorithm to find the "next" node
// (i.e., in-order successor) of a given node in a binary search tree.
// You may assume that each node has a link to its parent.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
  parent?: TreeNode<T>; // Link to parent node
};

function leftMostChild<T>(node: TreeNode<T>): TreeNode<T> {
  let n = node;
  while (n.left) n = n.left;
  return n;
}

export default function successor<T>(node: TreeNode<T>): TreeNode<T> | undefined {
  if (node.right) {
    return leftMostChild(node.right);
  }

  let child: TreeNode<T> = node;
  let parent = node.parent;
  while (parent != null && child === parent.right) {
    child = parent;
    parent = parent.parent;
  }
  return parent;
}
