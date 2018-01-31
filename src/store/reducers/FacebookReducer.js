import { METADATA } from '../actions/FacebookActions';

const defaultState = {
	metadata: {
		status: 'disconnected',
		accessToken: '',
		expiresIn: '',
		signedRequest: '',
		userID: '',
	},
};

const FacebookReducer = (state = defaultState, action) => {
	switch (action.type) {
		case METADATA:
			return {
				...state,
				metadata: {
					status: action.payload.status,
					accessToken: action.payload.accessToken,
					expiresIn: action.payload.expiresIn,
					signedRequest: action.payload.signedRequest,
					userId: action.payload.userID,
				},
			};
		default:
			return state;
	}
};

export default FacebookReducer;
