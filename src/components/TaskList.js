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
		this.filterView = this.filterView.bind(this);
		this._onChange = this._onChange.bind(this);

		this.state = {
			tasks: {},
			active_tab: 'all'
		};
	}

	// Life Cycle - Register for events
	componentDidMount() {
		TodoStore.addChangeListener(this._onChange);
	}
	componentWillUnmount() {
		TodoStore.removeChangeListener(this._onChange);
	}

	buildTaskItem(key) { 
		const task = this.state.tasks[key];
		const active = this.state.active_tab;
		if(active === 'all' || (active === 'completed' && task.completed) || (active === 'active' && !task.completed))
			return (<TodoItem key={task.id} id={task.id} itemName={task.name} completed={task.completed} />);
		else
			return null;
	}

	filterView(event) {
		event.preventDefault();
		const filter = event.target.dataset.filter;
		this.setState({active_tab: filter});
	}

	render() {
		const tasks = Object.keys(this.state.tasks).map(this.buildTaskItem);
		return (
			<div className="task-list">
				<p>My TaskList</p>
				<ul className="inline">
					<li><a href="#" data-filter="all" onClick={this.filterView} >All</a></li>
					<li><a href="#" data-filter="active" onClick={this.filterView} >Active</a></li>
					<li><a href="#" data-filter="completed" onClick={this.filterView} >Completed</a></li>
				</ul>
				<ul>
					{tasks.filter((t) => {return (t != null) ? true : false;})}
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
