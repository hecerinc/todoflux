import Dispatcher from '../Dispatcher';
import {EventEmitter} from 'events';
import Constants from '../Constants';
import Counter from '../Counter';

const ActionTypes = Constants.ActionTypes;
const CHANGE_EVENT = Constants.CHANGE_EVENT;

// data in memory
// var todos = {};

// var TodoStore = 
console.log(Dispatcher);

function _generateTodo(text) {
	return {
		id: Counter.increment(),
		created: Date.now(),
		name: text
	};
}

// Leave pending to transform to ES6
class TodoStore extends EventEmitter {

	constructor() {
		super();
		// Data in memory
		this._todos = {};
		this.dispatchToken = null; // nonexistant yet
	}

	// Set dispatchtoken
	setDispatchToken(token){
		this.dispatchToken = token;
	}
	// Another violation of constraint
	_addTodo(todo) {
		this._todos[todo.id] = todo;
	}

	// Event listeners
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}


	// Getters
	getTodo(id) {
		return this._todos[id];
	}
	getAll() {
		return this._todos;
	}

	// Emitter
	emitChange() {
		this.emit(CHANGE_EVENT);
	}
}


// New instance

const todoStore = new TodoStore();

// Register callbacks with dispatcher
var dtoken = Dispatcher.register((payload) => {
	const action = payload.action;
	switch(action.type){
		case ActionTypes.ADD_TODO:
			// do something
			const msg = _generateTodo(action.data);
			todoStore._addTodo(msg);
			todoStore.emitChange();
		break;
		case ActionTypes.EDIT_TODO:
			// do something else
			todoStore.emitChange();
		break;
		case ActionTypes.DELETE_TODO:
			// yet another thing
			todoStore.emitChange();
		break;
		default:
			// do nothing
	}
});

// Save dispatch token !! This violates constraint !!
todoStore.setDispatchToken(dtoken);

export default todoStore;
