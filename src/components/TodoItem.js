import React from 'react';
import TodoActionCreator from '../actions/TodoActionCreator';

class TodoItem extends React.Component {

	render() {
		const completed = this.props.completed?"checked":"";
		const completed_class = this.props.completed ? "todo-item completed":"todo-item";
		return (
			<li className={completed_class}>
				<input type="checkbox" checked={completed} name="is_completed" onChange={() => {TodoActionCreator.toggleTodo(this.props.id);}} />
				{this.props.itemName}
				<button className="remove-btn" onClick={() => TodoActionCreator.deleteTodo(this.props.id) }>Remove</button>
			</li>
		)
	}
}

export default TodoItem;
