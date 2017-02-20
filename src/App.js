import React, { Component } from 'react';
import TaskList from './components/TaskList';
import './index.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h1>ToDo Flux</h1>
				</div>
				<TaskList />
			</div>
		);
	}
}

export default App;
