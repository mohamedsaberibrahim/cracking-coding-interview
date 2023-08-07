/**
 * DirectedGraph
 *
 * An implementation for a directed graph using adjacency matrix.
 */

import { DirectedGraph } from './DirectedGraph';

describe('DirectedGraph test cases', () => {
  let graph: DirectedGraph;

  beforeEach(() => {
    graph = new DirectedGraph(5);
  });

  it('should insert a vertex into the graph', () => {
    graph.insert(0);
    expect(graph.adjacencyMatrix[0][0]).toBe(1);
  });

  it('should insert an edge between two vertices', () => {
    graph.insertEdge(0, 1);
    expect(graph.adjacencyMatrix[0][1]).toBe(1);
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
    const traversal = graph.depthFirstTraversal(0);
    expect(traversal).toEqual([0, 1, 3, 4, 2]);
  });

  it('should state that there is a route between vertex', () => {
    graph.insertEdge(0, 1);
    graph.insertEdge(0, 2);
    graph.insertEdge(1, 3);
    graph.insertEdge(3, 4);
    const routeExists = graph.routeBetweenVertex(0, 1);
    expect(routeExists).toEqual(true);
  });

  it('should state that there is no a route between vertex', () => {
    graph.insertEdge(0, 1);
    graph.insertEdge(0, 2);
    graph.insertEdge(1, 3);
    graph.insertEdge(3, 4);
    const routeExists = graph.routeBetweenVertex(4, 1);
    expect(routeExists).toEqual(false);
  });
});