// Todo Action Creator.js


// dunno what this will do

import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
const ActionTypes = Constants.ActionTypes;

// Methods that create actions and hands them to the dispatcher


export default {
	createTodo: function (payload) {
		console.log(Dispatcher);
		Dispatcher.handleViewAction({
			type: ActionTypes.ADD_TODO,
			data: payload
		});
		// here we would send to server
	}
};



