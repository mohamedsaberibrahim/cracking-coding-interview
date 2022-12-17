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
function sumLists(list1, list2) {
  let iterator1 = list1.head;
  let iterator2 = list2.head;
  let reminder = 0;
  let result = new LinkedList();
  while (iterator1 || iterator2) {
    let sum = 0;
    if(iterator1) {
      sum += iterator1.data;
      iterator1 = iterator1.next;
    }
    if(iterator2) {
      sum += iterator2.data;
      iterator2 = iterator2.next;
    }
    sum += reminder;
    const number = sum % 10;
    reminder = (sum - number) / 10;
    result.appendNode(new Node(number));
  }
  return result;
}

const main = () => {
  const linkedList1 = new LinkedList();
  const linkedList2 = new LinkedList();
  linkedList1.appendNode(new Node(7));
  linkedList1.appendNode(new Node(1));
  linkedList1.appendNode(new Node(6));
  linkedList1.printList();
  linkedList2.appendNode(new Node(5));
  linkedList2.appendNode(new Node(9));
  linkedList2.appendNode(new Node(2));
  const resultList = sumLists(linkedList1, linkedList2);
  resultList.printList(); // (2 -> 1 -> 9)
};

main();
