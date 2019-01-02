import {CHANGE_VIEW} from '../actions';

const initialState = {
	info: 'initial state loaded',
	name: 'jim'
}


export const appReducer = (state = initialState, action) => {
	console.log('reducing this action type', action.type, state);
	switch(action.type) {
		case CHANGE_VIEW:
		console.log('changing view', action.view, action.userType);
			return Object.assign({}, state, {
				view: action.view,
				userType: action.userType
			})
		default:
			return state
	}
}