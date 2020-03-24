import Node from './node';

/**
 * Linked list class
 */
export class LinkedList {
	head: Node;
	tail: Node;

	/**
	 * Add value to the tail
	 *
	 * @param {Number|String} value to store
	 * @returns {LinkedList} this
	 */
	append(value: number | string): LinkedList {
		const node = new Node(value);

		if (!this.head) {
			this.head = node;
			this.tail = node;

			return this;
		}

		this.tail.next = node;
		this.tail = node;

		return this;
	}

	/**
	 * Add value to the head
	 *
	 * @param {Number|String} value to store
	 * @returns {LinkedList} this
	 */
	prepend(value: number | string): LinkedList {
		const node = new Node(value, this.head);

		this.head = node;

		if (!this.tail) {
			this.tail = node;
		}

		return this;
	}

	/**
	 * Delete node by value
	 *
	 * @param {Number|String} value to delete
	 * @returns {Node} deleted node
	 */
	delete(value: number | string): Node {
		if (!this.head) {
			return null;
		}

		if (this.head.value === value) {
			const deletedNode = this.head;

			this.head = this.head.next;

			return deletedNode;
		}

		let currentNode = this.head;

		while(currentNode.next) {
			if (currentNode.next.value === value) {
				const deletedNode = currentNode.next;

				currentNode.next = currentNode.next.next;

				return deletedNode;
			} else {
				currentNode = currentNode.next;
			}
		}

		const deletedNode = this.tail;

		this.tail = currentNode;

		return deletedNode;
	}

	/**
	 * Find node by value
	 *
	 * @param {Number|String} value to find
	 * @returns {Node} found node
	 */
	find(value: number | string): Node {
		if (!this.head) {
			return null;
		}

		let node = this.head;

		while(node) {
			if (node.value === value) {
				return node;
			}

			node = node.next;
		}

		return null;
	}

	/**
	 * Delete tail node
	 *
	 * @returns {Node} deleted tail
	 */
	deleteTail(): Node {
		let tail = this.tail;

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;

			return tail;
		}

		let node = this.head;

		while(node.next) {
			if (!node.next.next) {
				node.next = null;
			}

			node = node.next;
		}

		this.tail = node;

		return tail;
	}

	/**
	 * Delete head node
	 *
	 * @returns {Node} deleted head
	 */
	deleteHead(): Node {
		if (!this.head) {
			return null;
		}

		const node = this.head;

		if (this.head.next) {
			this.head = this.head.next;

			return node;
		}

		this.head = null;
		this.tail = null;

		return node;
	}

	/**
	 * Build linked list from basic js array
	 *
	 * @param {Array<Number|String>} values[] array
	 * @returns {LinkedList} list instance
	 */
	fromArray(values: Array<number|string>): LinkedList {
		for (let i = 0; i < values.length; i++) {
			const value = values[i];

			this.append(value);
		}

		return this;
	}

	/**
	 * Build basic js array from linked list
	 *
	 * @returns {Array<Number|String>} array of values
	 */
	toArray(): Array<number|string> {
		const result = [];

		let node = this.head;

		while(node) {
			result.push(node.value);

			node = node.next;
		}

		return result;
	}

	/**
	 * Build string with comma separator from linked list values from head to tail
	 *
	 * @returns {String} list string
	 */
	toString(): string {
		return this.toArray().toString();
	}

	/**
	 * Just reverse linked list
	 *
	 * @returns {LinkedList} list instance
	 */
	reverse(): LinkedList {
		const list = this.fromArray(this.toArray().reverse());

		this.head = list.head;
		this.tail = list.tail;

		return this;
	}
}
