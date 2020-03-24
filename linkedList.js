class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if(!this.head) {
            return undefined;
        }

        let current = this.head;
        let previous = current;

        while(current.next) {
            previous = current;
            current = current.next;
        }

        this.tail = previous;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

    }

    shift() {
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(value) { 
        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index > this.length) return null;
        let count = 0;
        let current = this.head;
        while(count !== index) {
            current = current.next;
            count++;
        }

        return current;
    }

    set(value, index) {
        let nodeAtIndex = this.get(index);

        if(nodeAtIndex) {
            nodeAtIndex.value = value;
            return true;
        }

        return false;
    }

    insert(value, index) {
        if(index < 0 || index > this.length) return false;

        if(index === this.length) {
            return !!this.push(value);
        }

        if(index === 0) {
            return !!this.unshift(value);
        }

        let newNode = new Node(value);
        let previous = this.get(index - 1);
        let temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length - 1) return !!this.pop();
        if(index === 0) return !!this.shift();

        let previous = this.get(index - 1);
        let removedNode = previous.next;
        previous.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let previous = null;
        let next;

        while(node.next) {
            next = node.next;
            previous = node;
            node = next;
        }

        return this;
    }

    recursiveReverse(head) {
        if(!head || !head.next) {
            return head;
        }

        let temp = recursive(head.next);
        head.next.next = head;
        head.next = null;
        return temp;
    }
}