import React from 'react';
import TodoActionCreator from '../actions/TodoActionCreator';

var ENTER_KEY_CODE = 13;

class AddTaskForm extends React.Component {

	constructor() {
		super();
		this._onKeyDown = this._onKeyDown.bind(this);
	}

	_onKeyDown(event) {
		if(event.keyCode === ENTER_KEY_CODE) {
			const text = event.target.value.trim();
			if(text){
				TodoActionCreator.createTodo(text);
			}
			event.target.value = "";
		}
	}

	render() {
		return (
			<input onKeyDown={this._onKeyDown} type="text" name="taskName" placeholder="Add a new task" />
		)
	}
}

export default AddTaskForm;
