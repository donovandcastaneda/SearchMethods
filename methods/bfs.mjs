import { graph } from "../data/adjacenties.mjs";

export function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();
  const result = [];

  while (queue.length) {
    const vertex = queue.shift();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      // Use graph.get(vertex) instead of graph[vertex]
      const neighbors = graph.get(vertex);
      if (neighbors) { // Ensure neighbors is not undefined
        for (const neighbor of neighbors) {
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
}

const bfsResult = bfs(graph, "Anthony");
console.log("here are the bfs", bfsResult);

