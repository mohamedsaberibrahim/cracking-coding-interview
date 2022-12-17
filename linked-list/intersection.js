class LinkedList {
    constructor(head = null) {
      this.head = head;
    }
    
    appendNode(newNode){
      let node = this.head;
      if(node == null) {
          this.head = newNode;
          return;
      }
      while (node.next) {
          node = node.next;
      }
      node.next = newNode;
    }
  
    insertAt(index, newNode) {
      let node = this.head;
      if(index == 0) {
          newNode.next = node;
          this.head = newNode;
          return;
      }
      
      while(--index) {
          if(node.next !== null)
              node = node.next;
          else
              throw Error("Index Out of Bound");
      }
      
      let tempVal = node.next;
      node.next = newNode;
      newNode.next = tempVal;
    }
  
    removeFrom(index) {
      let node = this.head;
      if(index === 0) {
          if(node!==null)
          {
              node = node.next;
              this.head = node;
          }
          else
              throw Error("Index Out of Bound");
          return;
      }
      while(--index) {
          if(node.next !== null)
              node = node.next;
          else
              throw Error("Index Out of Bound");
      }
      node.next = node.next.next;
    }
  
    getFirst() {
      return this.head;
    }
  
    isEmpty() {
      return this.head == null;
    }
    
    listSize() {
      let size = 0;
      let node = this.head;
      while(node) {
        size++;
        node = node.next;
      }
      return size;
    }
    
    printList() {
      let node = this.head;
      while (node != null) {
        console.log(node.data);
        node = node.next;
      }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;         
    }
}

function initializeList(size) {
    const head = new Node(size);
    const linkedList = new LinkedList(head);
    for (let i = size - 1; i >= 0; i--) {
        linkedList.appendNode(new Node(i));
    }

    return linkedList;
}

function initializeRandomList(size) {
    const head = new Node(size);
    const linkedList = new LinkedList(head);
    for (let i = size - 1; i > 0; i--) {
        linkedList.appendNode(new Node(Math.floor(Math.random() * 1000)));
    }

    return linkedList;
}

function initializeDuplicateList(size) {
    const head = new Node(size);
    const linkedList = new LinkedList(head);
    for (let i = size - 1; i > 0; i--) {
        linkedList.appendNode(new Node(Math.floor( i / 2)));
    }

    return linkedList;
}

// time complexity: O(A+B)
// space complexity: O(A+B)
// Another approach more optimized to run through both lists to get the length of both them
// and start on the same head where both lists have the same length, when both iterators are equal return this node O(A+B)
function getIntersectionNode(list1, list2) {
  const unqiueNodes = new Set();
  let iterator1 = list1.head;
  let iterator2 = list2.head;
  while(iterator1 || iterator2) {
    if (iterator1) {
      if (unqiueNodes.has(iterator1)) return iterator1.data;
      unqiueNodes.add(iterator1);
      iterator1 = iterator1.next;
    }
    if (iterator2) {
      if (unqiueNodes.has(iterator2)) return iterator2.data;
      unqiueNodes.add(iterator2);
      iterator2 = iterator2.next;
    }
  }
  return false;
}

const main = () => {
  const list = new LinkedList();
  const intersectionNode = new Node(200);
  list.appendNode(new Node(9));
  list.appendNode(new Node(10));
  list.appendNode(new Node(5));
  list.appendNode(intersectionNode);
  list.appendNode(new Node(8));
  list.appendNode(new Node(7));

  const list2 = new LinkedList();
  list2.appendNode(new Node(4));
  list2.appendNode(new Node(3));
  list2.appendNode(intersectionNode);
  list2.appendNode(new Node(20));
  list2.appendNode(new Node(50));
  // list.printList(); // 9 -> 10 -> 5 -> 200 -> 8 -> 7 -> 20 -> 50
  // list2.printList(); // 4 -> 3 -> 200 -> 8 -> 7 -> 20 -> 50
  console.log(JSON.stringify(getIntersectionNode(list, list2))); // 200
};

main();
