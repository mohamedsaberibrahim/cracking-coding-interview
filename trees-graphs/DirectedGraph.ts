/**
 * DirectedGraph
 *
 * An implementation for a directed graph using adjacency matrix.
 */

import { UndirectedGraph } from './UndirectedGraph';

export class DirectedGraph extends UndirectedGraph {
  insertEdge(vertex1: number, vertex2: number): void {
      if (
        vertex1 >= 0 &&
        vertex1 < this.adjacencyMatrix.length &&
        vertex2 >= 0 &&
        vertex2 < this.adjacencyMatrix.length
      ) {
        this.adjacencyMatrix[vertex1][vertex2] = 1;
      }
  }

  routeBetweenVertex(vertex1, vertex2): boolean {
    const neighbors = this.depthFirstTraversal(vertex1);
    for (const vertex of neighbors) {
      if (vertex == vertex2) return true;
    }
    return false;
  }
}
