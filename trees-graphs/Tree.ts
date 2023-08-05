/**
 * Tree
 *
 * A tree implementation on TS using tree nodes.
 */

export class TreeNode {
    public key: String;
    public value: number;
    public children: TreeNode[];

    constructor(key: String, value: number, children: TreeNode[] = []) {
        this.key = key;
        this.value = value;
        this.children = children;
    }
}

export class Tree {
    public root: TreeNode;
    constructor(key: String, value: number) {
        this.root = new TreeNode(key, value);
    }

    insert(parentNodeKey: String, key: String, value: number): boolean {
        for(let node of this.preOrderTraverse()) {
            if (node.key === parentNodeKey) {
                node.children.push(new TreeNode(key, value));
                return true;
            }
        }
        return false;
    }

    remove(key: String): boolean {
        for(let node of this.preOrderTraverse()) {
            const filtered = node.children.filter(c => c.key !== key);
            if (filtered.length !== node.children.length) {
                node.children = filtered;
                return true;
            }
        }
        return false;
    }

    search(key: String): TreeNode | undefined {
        for(let node of this.preOrderTraverse()) {
            if (node.key == key) return node;
        }
        return undefined;
    }

    *preOrderTraverse(node: TreeNode = this.root): IterableIterator<TreeNode> {
        yield node;
        if (node.children.length) {
            for (let child of node.children) {
                yield *this.preOrderTraverse(child);
            }
        }
    }

    *postOrderTraverse(node: TreeNode = this.root): IterableIterator<TreeNode> {
        if (node.children.length) {
            for (let child of node.children) {
                yield *this.preOrderTraverse(child);
            }
        }
        yield node;
    }
}
