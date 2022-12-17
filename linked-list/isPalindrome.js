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
// space complexity: O(n)
// Another solution to use runner technique with stack
// space complexity: O(n)
// time complexity: O(n)
// Another solution is recursion while tracking the length to have base case on the middle
function reverseList(currentNode, reversedList) {
  if (currentNode == null) return null;
  reverseList(currentNode.next, reversedList);
  reversedList.appendNode(new Node(currentNode.data));
}

function isPalindrome(list) {
  let reversedList = new LinkedList();
  reverseList(list.head, reversedList);
  let iterator1 = list.head;  
  let iterator2 = reversedList.head;  
  while (iterator1) {
    if (iterator1.data !== iterator2.data) {
      return false;
    }
    iterator1 = iterator1.next;
    iterator2 = iterator2.next;
  }
  return true;
}

const main = () => {
  const list = new LinkedList();
  list.appendNode(new Node(7));
  list.appendNode(new Node(1));
  list.appendNode(new Node(2));
  list.appendNode(new Node(7));
  console.log(isPalindrome(list)); // false

  const list2 = new LinkedList();
  list2.appendNode(new Node(7));
  list2.appendNode(new Node(1));
  list2.appendNode(new Node(1));
  list2.appendNode(new Node(7));
  console.log(isPalindrome(list2)); // true
};

main();
