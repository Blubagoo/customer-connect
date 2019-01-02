export const CHANGE_VIEW = 'CHANGE_VIEW';

export const changeView = (view, userType) => {
	console.log('changing view to', view, 'changing userType to ', userType);
	return ({
		type: CHANGE_VIEW,
		view,
		userType
	})
}
