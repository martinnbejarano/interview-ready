// 3. *List of Depths*:

// Given a binary tree, design an algorithm which creates a linked list
// of all the nodes at each depth (e.g., if you have a tree with depth D,
// you'll have D linked lists).

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export type ListNode<T> = {
  value: T;
  next?: ListNode<T>;
};

function dfs<T>(
  node: TreeNode<T> | null | undefined,
  depth: number,
  lists: ListNode<T>[],
): void {
  if (node == null) return;

  if (depth === lists.length) {
    lists.push({ value: node.value });
  } else {
    let tail = lists[depth];
    while (tail.next) tail = tail.next;
    tail.next = { value: node.value };
  }

  dfs(node.left ?? null, depth + 1, lists);
  dfs(node.right ?? null, depth + 1, lists);
}

export default function listOfDepths<T>(
  root: TreeNode<T> | null,
): ListNode<T>[] {
  if (root == null) return [];
  const lists: ListNode<T>[] = [];
  dfs(root, 0, lists);
  return lists;
}
