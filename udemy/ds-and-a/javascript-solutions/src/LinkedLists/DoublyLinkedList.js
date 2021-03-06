const DoublyLinkedNode = require("./DoublyLinkedNode");

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    // O(1)
    insertAtHead(data) {
        let newNode = new DoublyLinkedNode(data);
        newNode.nextNode = this.head;

        if (this.head) {
            this.head.prevNode = newNode;
        }

        newNode.nextNode = this.head;
        this.head = newNode;
    }

    toString() {
        let result = [];
        let current = this.head;

        while (current != null) {
            result.push(current.data);

            current = current.nextNode;
        }

        return result.join(', ');
    }
}

module.exports = DoublyLinkedList;