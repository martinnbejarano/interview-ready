// Write the basic tree algorithms of Depth-first-search and Breadth-first search.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export class Tree<T> {

  bfs(node: TreeNode<T> | undefined, visit: (node: TreeNode<T>) => void) {
    if (!node) {
      return
    }

    const queue = [node]
    let p
    while (p = queue.shift()) {
      visit(p)
      if (p.left) { 
        queue.push(p.left)
      }

      if (p.right) {
        queue.push(p.right)
      }

      
    }

  }

  dfs(node: TreeNode<T> | undefined, visit: (node: TreeNode<T>) => void) {
    if (!node) {
      return
    }

    visit(node)
    this.dfs(node.left, visit)
    this.dfs(node.right, visit) 
  }
}
