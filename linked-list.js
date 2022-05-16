/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		let newNode = new Node(val);
		newNode.next = null;
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			return this.push(val);
		} else {
			newNode.next = this.head;
			this.head = newNode;
			this.length++;
		}
	}

	/** pop(): return & remove last item. */

	pop() {
		let lastNode;
		if (this.length === 0) {
			throw new Error('Linked list is empty');
		} else if (this.length === 1) {
			lastNode = this.tail;
			this.head = null;
			this.tail = null;
			this.length--;
		} else {
			lastNode = this.tail;
			let current = this.head;
			this.length--;
			while (current !== null) {
				if (current.next === this.tail) {
					current.next = null;
					this.tail = current;
				}
				current = current.next;
			}
		}

		lastNode.next = null;
		return lastNode.val;
	}

	/** shift(): return & remove first item. */

	shift() {
		let firstNode;
		if (this.length === 0) {
			throw new Error('Linked list is empty');
		} else if (this.length === 1) {
			firstNode = this.head;
			this.head = null;
			this.tail = null;
			this.length--;
		} else {
			firstNode = this.head;
			this.head = this.head.next;
			this.length--;
		}
		firstNode.next = null;
		return firstNode.val;
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		if (idx > this.length - 1 || idx < 0) {
			throw new Error('Invalid index');
		}
		let current = this.head;
		let position = 0;
		while (current !== null) {
			if (position === idx) {
				return current.val;
			}
			current = current.next;
			position++;
		}
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		if (idx > this.length - 1 || idx < 0) {
			throw new Error('Invalid index');
		}
		let current = this.head;
		let position = 0;
		while (current !== null) {
			if (position === idx) {
				current.val = val;
			}
			current = current.next;
			position++;
		}
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		let foundNode;
		if (idx > this.length || idx < 0) {
			throw new Error('Invalid index');
		}
		let current = this.head;
		let position = 0;
		while (current !== null) {
			if (position === idx) {
				foundNode = current;
			}
			current = current.next;
			position++;
		}
		let newNode = new Node(val);

		if (idx === 0) {
			return this.unshift(val);
		} else if (idx === this.length) {
			return this.push(val);
		} else {
			let previousNode;
			if (idx > this.length || idx < 0) {
				throw new Error('Invalid index');
			}
			let current = this.head;
			let position = 0;
			while (current !== null) {
				if (position === idx - 1) {
					previousNode = current;
				}
				current = current.next;
				position++;
			}
			previousNode.next = newNode;
			newNode.next = foundNode;
			this.length++;
		}
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		let foundNode;
		if (idx > this.length - 1 || idx < 0) {
			throw new Error('Invalid index');
		}
		let current = this.head;
		let position = 0;
		while (current !== null) {
			if (position === idx) {
				foundNode = current;
			}
			current = current.next;
			position++;
		}
		if (idx === 0) return this.shift();
		else if (idx === this.length - 1) return this.pop();
		else {
			let previousNode = this.getAt(idx - 1);
			previousNode.next = foundNode.next;
			foundNode.next = null;
			length--;
			return foundNode;
		}
	}

	/** average(): return an average of all values in the list */

	average() {}
}

// let list = new LinkedList([ 'First', 'Second', 'Third' ]);
// console.log(list.removeAt(0));
module.exports = LinkedList;
