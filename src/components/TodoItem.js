import React from 'react';
import TodoActionCreator from '../actions/TodoActionCreator';

class TodoItem extends React.Component {
	render() {
		return (
			<li className="todo-item">
				{this.props.itemName}
				<button className="remove-btn" onClick={() => TodoActionCreator.deleteTodo(this.props.id) }>Remove</button>
			</li>
		)
	}
}

export default TodoItem;
