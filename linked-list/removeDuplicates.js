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
  // time complexity: O(n)
  // space complexity: O(1)
  function getKthElementFromLast(linkedList, k) {
    if (k > linkedList.listSize()) return null;
    let fast = linkedList.head;
    let slow = linkedList.head;
    while(--k) {
        fast = fast.next;
    }
    while(fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
  }
  
  const main = () => {
    const linkedList = initializeList(50);
    console.log(`size: ${getKthElementFromLast(3)}`); // 50
  };
    
  main();
    