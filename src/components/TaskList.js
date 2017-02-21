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

		// this.saveTask = this.saveTask.bind(this);
		this.buildTaskItem = this.buildTaskItem.bind(this);
		this.removeTask = this.removeTask.bind(this);
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
		return (<TodoItem key={task.id} id={task.id} itemName={task.name} removeTask={this.removeTask} />);
	}

	// saveTask(task) {
	// 	const tasks = {...this.state.tasks};
	// 	const timestamp = Date.now();
	// 	tasks['task-'+ timestamp] = {
	// 		id: timestamp,
	// 		name: task
	// 	};
	// 	this.setState({tasks});
	// }

	removeTask(taskId) {
		const tasks = {...this.state.tasks};
		const tid = 'task-' + taskId;
 		delete tasks[tid];
		this.setState({tasks});
	}

	render() {
		const tasks = Object.keys(this.state.tasks).map(this.buildTaskItem);
		return (
			<div className="task-list">
				<p>My TaskList</p>
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
