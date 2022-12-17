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
  
// space complexity: O(n)
// time complexity: O(n)
function paritionListOnValue(value, list) {
    const newList = new LinkedList(new Node(value));
    let iterator = list.head;
    let paritionNode = newList.head;
    let head = newList.head;
    while(iterator) {
        if(iterator.data >= value) {
        const newNode = new Node(iterator.data);
        newNode.next = paritionNode.next;
        paritionNode.next = newNode;
        } else if (iterator.data < value) {
        const newNode = new Node(iterator.data);
        newNode.next = head;
        head = newNode;
        }
        iterator = iterator.next;
    }
    newList.head = head;
    return newList;
}

const main = () => {
    const head = new Node(3);
    const linkedList = new LinkedList(head);
    linkedList.appendNode(new Node(5));
    linkedList.appendNode(new Node(8));
    linkedList.appendNode(new Node(5));
    linkedList.appendNode(new Node(10));
    linkedList.appendNode(new Node(2));
    linkedList.appendNode(new Node(1));
    linkedList.appendNode(new Node(0));
    const newList = paritionListOnValue(2, linkedList);
    newList.printList();
};

main();
