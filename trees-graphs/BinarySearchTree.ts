/**
 * BinarySearchTree
 *
 * An implementation for Binary Search Tree using Binary Search Tree Node
 */
export class BinarySearchTreeNode {
    public data: number;
    public left: BinarySearchTreeNode;
    public right: BinarySearchTreeNode;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    public root: BinarySearchTreeNode;
    constructor() {
    }

    insert(data: number): BinarySearchTreeNode {
        if (!this.root) return this.root = new BinarySearchTreeNode(data);

        let currentNode = this.root;
        while (true) {
            if (data > currentNode.data) {
              if (currentNode.right) {
                currentNode = currentNode.right;
              } else {
                currentNode.right = new BinarySearchTreeNode(data);
                return currentNode.right;
              }
            } else {
              if (currentNode.left) {
                currentNode = currentNode.left;
              } else {
                currentNode.left = new BinarySearchTreeNode(data);
                return currentNode.left;
              }
            }
        }
    }

    search(data: number): BinarySearchTreeNode | undefined {
        if (!this.root) return undefined;

        let currentNode = this.root;

        while (data !== currentNode.data) {
            if (data > currentNode.data) {
                if (!currentNode.right) return;
                currentNode = currentNode.right;
            } else {
                if (!currentNode.left) return;
                currentNode = currentNode.left;
            }
        }

        return currentNode;
    }

    *preOrderTraverse(node: BinarySearchTreeNode = this.root): IterableIterator<BinarySearchTreeNode> {
        if (node) {
            yield node;
            yield *this.preOrderTraverse(node.left);
            yield *this.preOrderTraverse(node.right);   
        }
    }

    *postOrderTraverse(node: BinarySearchTreeNode = this.root): IterableIterator<BinarySearchTreeNode>{
        if (node) {
            yield *this.postOrderTraverse(node.left);
            yield *this.postOrderTraverse(node.right);   
            yield node;;
        }
    }

    *inOrderTraverse(node: BinarySearchTreeNode = this.root): IterableIterator<BinarySearchTreeNode> {
        if (node) {
            yield *this.inOrderTraverse(node.left);
            yield node;
            yield *this.inOrderTraverse(node.right);
        }
    }
}
