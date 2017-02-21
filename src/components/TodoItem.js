import React from 'react';
import TodoActionCreator from '../actions/TodoActionCreator';

class TodoItem extends React.Component {

	render() {
		const completed = this.props.completed?"checked":"";
		return (
			<li className="todo-item">
				<input type="checkbox" checked={completed} name="is_completed" onChange={() => {TodoActionCreator.toggleTodo(this.props.id);}} />
				{this.props.itemName}
				<button className="remove-btn" onClick={() => TodoActionCreator.deleteTodo(this.props.id) }>Remove</button>
			</li>
		)
	}
}

export default TodoItem;
