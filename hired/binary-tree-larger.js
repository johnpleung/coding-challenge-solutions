class node {
	constructor (data){
		this.left = null;
		this.right = null;
		this.data = data;
	}
	append (data) {
		if (!this.left) {
			this.left = new node(data);
		} else if (!this.right) {
			this.right = new node(data);
		} else {
			if (this.right.numNodes < this.left.numNodes) {
				this.right.append(data);
			} else {
				this.left.append(data);
			}
		}
	}
	get val () {
		let total = this.data;
		if (this.left) {
			total += this.left.val;
		}
		if (this.right) {
			total += this.right.val;
		}
		return total;
	}
	get numNodes () {
		let ret = 0;
		if (this.left) {
			ret++;
			ret += this.left.numNodes;
		}
		if (this.right) {
			ret++;
			ret += this.right.numNodes;
		}
		return ret;
	}
}

class tree {
	constructor(data) {
		if (typeof data == 'number') {
			data = [data];
		}
		data.filter(datum => datum > 0).forEach((datum, index) => {
			if (!index) {
				this.root = new node(datum);
			} else {
				this.root.append(datum);
			}
		});
	}
	getLarger() {
		if (this.root && this.root.left && this.root.right) {
			if (this.root.left.val < this.root.right.val){
				return 'Right';
			} else if (this.root.left.val > this.root.right.val) {
				return 'Left';
			}
		}
		return '';
	}
}

const solution = (arr) => {
	return new tree(arr).getLarger();
};