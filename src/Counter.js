class Counter {

	constructor() {
		this._count = 1;
	}

	increment() {
		return 'task-' + this._count++;
	}
}

export default new Counter();

