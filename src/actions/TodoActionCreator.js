// Todo Action Creator.js


import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
const ActionTypes = Constants.ActionTypes;

// Methods that create actions and hands them to the dispatcher


export default {
	createTodo: function (payload) {
		Dispatcher.handleViewAction({
			type: ActionTypes.ADD_TODO,
			data: payload
		});
		// here we would send to server
	},
	deleteTodo: function(payload) {
		Dispatcher.handleViewAction({
			type: ActionTypes.DELETE_TODO,
			data: payload
		});
	},
	toggleTodo: function(payload) {
		Dispatcher.handleViewAction({
			type: ActionTypes.TOGGLE_TODO,
			data: payload
		});
	}
};



