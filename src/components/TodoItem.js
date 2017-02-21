import React from 'react';
import TodoActionCreator from '../actions/TodoActionCreator';

class TodoItem extends React.Component {
	constructor() {
		super();
		this.checkChange = this.checkChange.bind(this);
	}

	checkChange(event) {
		if(event.target.checked){
			TodoActionCreator.completeTodo(this.props.id);
		}
	}

	render() {
		return (
			<li className="todo-item">
				<input type="checkbox" name="is_completed" onChange={this.checkChange} />
				{this.props.itemName}
				<button className="remove-btn" onClick={() => TodoActionCreator.deleteTodo(this.props.id) }>Remove</button>
			</li>
		)
	}
}

export default TodoItem;
