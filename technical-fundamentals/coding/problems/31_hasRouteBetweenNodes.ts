// 1. *Route Between Nodes*:

// Given a directed graph, design an algorithm to find out whether there is a route
// between two nodes.

export type GraphNode = {
  value: number;
  neighbors: GraphNode[];
};

function dfs(
  start: GraphNode,
  end: GraphNode,
  visited: Set<GraphNode>,
): boolean {
  if (start === end) return true;
  if (visited.has(start)) return false;

  visited.add(start);

  for (const neighbor of start.neighbors) {
    if (dfs(neighbor, end, visited)) return true;
  }

  return false;
}

export default function hasRouteBetweenNodes(
  start: GraphNode,
  end: GraphNode,
): boolean {
  return dfs(start, end, new Set());
}
