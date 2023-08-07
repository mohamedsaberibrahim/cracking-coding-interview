/**
 * Graph
 *
 * A graph implementation using adjacency matrix.
 */

import { Graph } from "./Graph";

describe('Graph test cases', () => {
  let graph: Graph;

  beforeEach(() => {
    graph = new Graph(5);
  });

  it('should insert a vertex into the graph', () => {
    graph.insert(0);
    expect(graph.adjacencyMatrix[0][0]).toBe(1);
  });

  it('should insert an edge between two vertices', () => {
    graph.insertEdge(0, 1);
    expect(graph.adjacencyMatrix[0][1]).toBe(1);
    expect(graph.adjacencyMatrix[1][0]).toBe(1);
  });

  it('should remove a vertex from the graph', () => {
    graph.remove(0);
    expect(graph.adjacencyMatrix[0][0]).toBe(0);
    expect(graph.adjacencyMatrix[1][0]).toBe(0);
    expect(graph.adjacencyMatrix[0][1]).toBe(0);
  });

  it('should perform a breadth-first traversal', () => {
    graph.insertEdge(0, 1);
    graph.insertEdge(0, 2);
    graph.insertEdge(1, 3);
    graph.insertEdge(0, 4);
    const traversal = graph.breadthFirstTraversal(0);
    expect(traversal).toEqual([0, 1, 2, 4, 3]);
  });

  it('should perform a depth-first traversal', () => {
    graph.insertEdge(0, 1);
    graph.insertEdge(0, 2);
    graph.insertEdge(1, 3);
    graph.insertEdge(3, 4);
    const traversal = graph.depthFirstTraversal(2);
    expect(traversal).toEqual([2, 0, 1, 3, 4]);
  });
});
