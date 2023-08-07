/**
 * Graph
 *
 * A graph implementation using adjacency matrix.
 */

import { Queue } from '../stacks-queues/Queue';

export class Graph {
    adjacencyMatrix: number[][];
  
    constructor(size: number) {
      this.adjacencyMatrix = new Array<number[]>(size);
  
      for (let i = 0; i < size; i++) {
        this.adjacencyMatrix[i] = new Array<number>(size).fill(0);
      }
    }
  
    insert(vertex: number): void {
      if (vertex >= 0 && vertex < this.adjacencyMatrix.length) {
        this.adjacencyMatrix[vertex][vertex] = 1;
      }
    }
  
    insertEdge(vertex1: number, vertex2: number): void {
      if (
        vertex1 >= 0 &&
        vertex1 < this.adjacencyMatrix.length &&
        vertex2 >= 0 &&
        vertex2 < this.adjacencyMatrix.length
      ) {
        this.adjacencyMatrix[vertex1][vertex2] = 1;
        this.adjacencyMatrix[vertex2][vertex1] = 1;
      }
    }
  
    remove(vertex: number): void {
      if (vertex >= 0 && vertex < this.adjacencyMatrix.length) {
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
          this.adjacencyMatrix[vertex][i] = 0;
          this.adjacencyMatrix[i][vertex] = 0;
        }
      }
    }

    breadthFirstTraversal(startingVertex: number): number[] {
      const visited: boolean[] = new Array<boolean>(this.adjacencyMatrix.length).fill(false);
      const queue: Queue = new Queue();
      const result: number[] = [];
  
      visited[startingVertex] = true;
      queue.enqueue(startingVertex);
  
      while (queue.size()) {
        const vertex = queue.dequeue();
        result.push(vertex);
  
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
          if (this.adjacencyMatrix[vertex][i] === 1 && !visited[i]) {
            visited[i] = true;
            queue.enqueue(i);
          }
        }
      }
  
      return result;
    }

    depthFirstTraversal(startingVertex: number): number[] {
      const visited: boolean[] = new Array<boolean>(this.adjacencyMatrix.length).fill(false);
      const result: number[] = [];
  
      this._depthFirstTraversal(startingVertex, visited, result);
  
      return result;
    }

    private _depthFirstTraversal(
      vertex: number,
      visited: boolean[],
      result: number[]
    ): void {
      visited[vertex] = true;
      result.push(vertex);
  
      for (let i = 0; i < this.adjacencyMatrix.length; i++) {
        if (this.adjacencyMatrix[vertex][i] === 1 && !visited[i]) {
          this._depthFirstTraversal(i, visited, result);
        }
      }
    }
}