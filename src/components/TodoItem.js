import React from 'react';
import TodoActionCreator from '../actions/TodoActionCreator';

class TodoItem extends React.Component {
	constructor() {
		super();
		this.checkChange = this.checkChange.bind(this);
	}

	checkChange(event) {
		TodoActionCreator.toggleTodo(this.props.id);
	}

	render() {
		const completed = this.props.completed?"checked":"";
		return (
			<li className="todo-item">
				<input type="checkbox" checked={completed} name="is_completed" onChange={this.checkChange} />
				{this.props.itemName}
				<button className="remove-btn" onClick={() => TodoActionCreator.deleteTodo(this.props.id) }>Remove</button>
			</li>
		)
	}
}

export default TodoItem;
