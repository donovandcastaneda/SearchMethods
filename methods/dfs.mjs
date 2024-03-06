
import { graph } from "../data/adjacenties.mjs";

export function dfs(graph, start) {
  const stack = [start];
  const visited = new Set();
  const result = [];

  while (stack.length) {
    const vertex = stack.pop();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      const neighbors = graph.get(vertex);
      if(neighbors){
        for (const neighbor of neighbors) {
          stack.push(neighbor);
        }
      }  
    }
  }

  return result;
}

const dfsResult = dfs(graph, "Anthony");
console.log("here are dfs", dfsResult);
