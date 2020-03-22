import Node from './node';

export class List {
	head: Node;
	tail: Node;

	append(value: number | string): List {
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

	prepend(value: number | string): List {
		const node = new Node(value, this.head);

		this.head = node;

		if (!this.tail) {
			this.tail = node;
		}

		return this;
	}

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

	fromArray(values: Array<number|string>): List {
		for (let i = 0; i < values.length; i++) {
			const value = values[i];

			this.append(value);
		}

		return this;
	}

	toArray(): Array<number|string> {
		const result = [];

		let node = this.head;

		while(node) {
			result.push(node.value);

			node = node.next;
		}

		return result;
	}

	toString(): string {
		return this.toArray().toString();
	}

	reverse(): List {
		const list = this.fromArray(this.toArray().reverse());

		this.head = list.head;
		this.tail = list.tail;

		return this;
	}
}