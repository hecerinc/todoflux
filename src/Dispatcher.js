// Dispatcher.js

import {Dispatcher} from 'flux';


class AppDispatcher extends Dispatcher {

	handleViewAction(action) {
		const payload = {
			source: 'VIEW_ACTION',
			action: action
		};
		this.dispatch(payload);
	}

	handleServerAction() {
		// do something when the server responds
		console.error("Not yet implemented");
		console.error("Action from Server");
	}
}


export default new AppDispatcher();

