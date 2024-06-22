class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    printForward() {
        let current = this.head;
        let str = 'null <-> ';
        while (current) {
            str += current.data + ' <-> ';
            current = current.next;
        }
        console.log(str + 'null');
    }

    printForwardWithRecursion(node) {
        if (!node) {
            console.log('null');
            return;
        }
        process.stdout.write(node.data + ' -> ');
        this.printForwardWithRecursion(node.next);
    }

    printBackwardsWithRecursion(node) {
        if (!node) {
            return;
        }
        this.printBackwardsWithRecursion(node.next);
        process.stdout.write(node.data + ' -> ');
    }

    printBackwardsWithWhile() {
        let current = this.tail;
        let str = 'null';
        while (current) {
            str = ' -> ' + current.data + str;
            current = current.prev;
        }
        console.log('null' + str);
    }

    removeAt(position) {
        if (position < 0 || position >= this.size) {
            return false;
        }
        let current = this.head;
        let index = 0;
        if (position === 0 && current) {
            this.head = current.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            this.size--;
            return true;
        }
        while (current) {
            if (index === position) {
                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }
                if (current.prev) {
                    current.prev.next = current.next;
                }
                this.size--;
                return true;
            }
            current = current.next;
            index++;
        }
        return false;
    }

    updateAt(position, newData) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (index === position) {
                current.data = newData;
                return true;
            }
            current = current.next;
            index++;
        }
        return false;
    }

    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    searchWithRecursion(data, node) {
        if (!node) {
            return false;
        }
        if (node.data === data) {
            return true;
        }
        return this.searchWithRecursion(data, node.next);
    }

    static mergeTwoSortedLists(list1, list2) {
        const mergedList = new DoublyLinkedList();
        let current1 = list1.head;
        let current2 = list2.head;

        while (current1 && current2) {
            if (current1.data < current2.data) {
                mergedList.append(current1.data);
                current1 = current1.next;
            } else {
                mergedList.append(current2.data);
                current2 = current2.next;
            }
        }

        while (current1) {
            mergedList.append(current1.data);
            current1 = current1.next;
        }

        while (current2) {
            mergedList.append(current2.data);
            current2 = current2.next;
        }

        return mergedList;
    }

    deleteNthFromEnd(n) {
        if (n <= 0 || n > this.size) {
            return false;
        }

        let fast = this.head;
        let slow = this.head;

        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        if (!fast) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            this.size--;
            return true;
        }

        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;
        if (slow.next) {
            slow.next.prev = slow;
        } else {
            this.tail = slow;
        }

        this.size--;
        return true;
    }
}

// Test the code
const list1 = new DoublyLinkedList();
list1.append(1);
list1.append(3);
list1.append(5);

const list2 = new DoublyLinkedList();
list2.append(2);
list2.append(4);
list2.append(6);

const mergedList = DoublyLinkedList.mergeTwoSortedLists(list1, list2);
mergedList.printForward();

const list3 = new DoublyLinkedList();
list3.append(1);
list3.append(2);
list3.append(3);
list3.append(4);
list3.append(5);

list3.deleteNthFromEnd(2);
list3.printForward();
