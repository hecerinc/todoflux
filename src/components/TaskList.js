import React from 'react';
import TodoItem from './TodoItem';
import AddTaskForm from './AddTaskForm';
import TodoStore from '../stores/TodoStore';

// Supposed to maintain task list in this component
function getTodosFromStore(){
	return TodoStore.getAll();
}

class TaskList extends React.Component {

	constructor() {
		super();

		this.buildTaskItem = this.buildTaskItem.bind(this);
		this._onChange = this._onChange.bind(this);

		this.state = {
			tasks: {}
		};
	}

	// Life Cycle - Register for events
	componentDidMount() {
		TodoStore.addChangeListener(this._onChange);
	}
	componentWillUnmount() {
		TodoStore.removeChangeListener(this._onChange);
	}

	buildTaskItem (key) { 
		const task = this.state.tasks[key];
		return (<TodoItem key={task.id} id={task.id} itemName={task.name} />);
	}

	render() {
		const tasks = Object.keys(this.state.tasks).map(this.buildTaskItem);
		return (
			<div className="task-list">
				<p>My TaskList</p>
				<ul className="inline">
					<li><a href="#">All</a></li>
					<li><a href="#">Active</a></li>
					<li><a href="#">Completed</a></li>
				</ul>
				<ul>
					{tasks}
				</ul>
				<AddTaskForm />
			</div>
		)
	}

	_onChange() {
		this.setState({tasks: getTodosFromStore()});
	}

}

export default TaskList;
