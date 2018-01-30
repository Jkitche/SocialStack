import { SERIAL } from '../actions/FacebookActions';

const defaultState = {
	status: 'disconnected',
	accessToken: '',
	expiresIn: '',
	signedRequest: '',
	userID: '',
};

const FacebookReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SERIAL:
			return { ...state, serial: action.payload.serial };
		default:
			return state;
	}
};

export default FacebookReducer;
