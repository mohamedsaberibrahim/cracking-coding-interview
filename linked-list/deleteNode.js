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
    // time complexity: O(1)
    // space complexity: O(1)
    function deleteNode(node) {
      if (node == null || node.next == null) return false;
      node.data = node.next.data;
      node.next = node.next.next;
      return true;
    }
    
    const main = () => {
      const linkedList = initializeList(5);
      const node1 = new Node(10);
      const node2 = new Node(20);
      linkedList.appendNode(node1);
      linkedList.appendNode(node2);
      deleteNode(node1);
      linkedList.printList();
    };
      
    main();
      