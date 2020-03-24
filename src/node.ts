export default class Node {
	value: number | string;
	next: Node;

	constructor(value: number | string, next: Node = null) {
		this.value = value;
		this.next = next;
	}
}
