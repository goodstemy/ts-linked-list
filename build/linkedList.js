"use strict";
exports.__esModule = true;
var node_1 = require("./node");
/**
 * Linked list class
 */
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    /**
     * Add value to the tail
     *
     * @param {Number|String} value to store
     * @returns {LinkedList} this
     */
    LinkedList.prototype.append = function (value) {
        var node = new node_1["default"](value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        return this;
    };
    /**
     * Add value to the head
     *
     * @param {Number|String} value to store
     * @returns {LinkedList} this
     */
    LinkedList.prototype.prepend = function (value) {
        var node = new node_1["default"](value, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        return this;
    };
    /**
     * Delete node by value
     *
     * @param {Number|String} value to delete
     * @returns {Node} deleted node
     */
    LinkedList.prototype["delete"] = function (value) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === value) {
            var deletedNode_1 = this.head;
            this.head = this.head.next;
            return deletedNode_1;
        }
        var currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                var deletedNode_2 = currentNode.next;
                currentNode.next = currentNode.next.next;
                return deletedNode_2;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        var deletedNode = this.tail;
        this.tail = currentNode;
        return deletedNode;
    };
    /**
     * Find node by value
     *
     * @param {Number|String} value to find
     * @returns {Node} found node
     */
    LinkedList.prototype.find = function (value) {
        if (!this.head) {
            return null;
        }
        var node = this.head;
        while (node) {
            if (node.value === value) {
                return node;
            }
            node = node.next;
        }
        return null;
    };
    /**
     * Delete tail node
     *
     * @returns {Node} deleted tail
     */
    LinkedList.prototype.deleteTail = function () {
        var tail = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return tail;
        }
        var node = this.head;
        while (node.next) {
            if (!node.next.next) {
                node.next = null;
            }
            node = node.next;
        }
        this.tail = node;
        return tail;
    };
    /**
     * Delete head node
     *
     * @returns {Node} deleted head
     */
    LinkedList.prototype.deleteHead = function () {
        if (!this.head) {
            return null;
        }
        var node = this.head;
        if (this.head.next) {
            this.head = this.head.next;
            return node;
        }
        this.head = null;
        this.tail = null;
        return node;
    };
    /**
     * Build linked list from basic js array
     *
     * @param {Array<Number|String>} values[] array
     * @returns {LinkedList} list instance
     */
    LinkedList.prototype.fromArray = function (values) {
        for (var i = 0; i < values.length; i++) {
            var value = values[i];
            this.append(value);
        }
        return this;
    };
    /**
     * Build basic js array from linked list
     *
     * @returns {Array<Number|String>} array of values
     */
    LinkedList.prototype.toArray = function () {
        var result = [];
        var node = this.head;
        while (node) {
            result.push(node.value);
            node = node.next;
        }
        return result;
    };
    /**
     * Build string with comma separator from linked list values from head to tail
     *
     * @returns {String} list string
     */
    LinkedList.prototype.toString = function () {
        return this.toArray().toString();
    };
    /**
     * Just reverse linked list
     *
     * @returns {LinkedList} list instance
     */
    LinkedList.prototype.reverse = function () {
        var list = this.fromArray(this.toArray().reverse());
        this.head = list.head;
        this.tail = list.tail;
        return this;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
