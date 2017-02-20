import React from 'react';

class TodoItem extends React.Component {
	render() {
		return (
			<li className="todo-item">
				{this.props.itemName}
				<button className="remove-btn" onClick={() => this.props.removeTask(this.props.id) }>Remove</button>
			</li>
		)
	}
}

export default TodoItem;
