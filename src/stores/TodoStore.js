import Dispatcher from '../Dispatcher';
import {EventEmitter} from 'events';
import Constants from '../Constants';
import Counter from '../Counter';

const ActionTypes = Constants.ActionTypes;
const CHANGE_EVENT = Constants.CHANGE_EVENT;

// data in memory
// var todos = {};

function _generateTodo(text) {
	return {
		id: Counter.increment(),
		created: Date.now(),
		completed: false,
		name: text
	};
}

class TodoStore extends EventEmitter {

	constructor(dispatcher) {
		super();

		// Data in memory
		// getInitialState()
		this._todos = {}; 

		this._dispatcher = dispatcher;

		// Register with dispatcher 
		this.dispatchToken = this._dispatcher.register(this._eventHandler.bind(this));
	}

	_eventHandler(payload) {
		const action = payload.action;
		switch(action.type){
			case ActionTypes.ADD_TODO:
				const msg = _generateTodo(action.data);
				this._todos[msg.id] = msg;
				this.emitChange();
			break;
			case ActionTypes.EDIT_TODO:
				// do something else
				// TODO: implement this method
				this.emitChange();
			break;
			case ActionTypes.DELETE_TODO: { // scoped to make todo_id local to the case
				let todo_id = action.data;
				delete this._todos[todo_id];
				this.emitChange();
			}
			break;
			case ActionTypes.TOGGLE_TODO: { // these are scoped so that todo_id is local
				let todo_id = action.data;
				this._todos[todo_id].completed = !this._todos[todo_id].completed;
				this.emitChange();
			}
			break;
			default:
				// do nothing
		}
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

export default new TodoStore(Dispatcher);
