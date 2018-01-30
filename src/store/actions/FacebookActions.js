// All actions must follow FSA Standard: https://github.com/acdlite/flux-standard-action

export const STATUS = 'SET_STATUS';
export const ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const EXPIRES_IN = 'SET_EXPIRES_IN';
export const USER_ID = 'SET_USER_ID';

export default {
	SET_STATUS: (status) => {
		return {
			type: STATUS,
			payload: {
				status,
			},
		};
	},
	SET_ACCESS_TOKEN: (accessToken) => {
		return {
			type: ACCESS_TOKEN,
			payload: {
				accessToken,
			},
		};
	},
	SET_EXPIRES_IN: (expiresIn) => {
		return {
			type: EXPIRES_IN,
			payload: {
				expiresIn,
			},
		};
	},
	SET_USER_ID: (userID) => {
		return {
			type: USER_ID,
			payload: {
				userID,
			},
		};
	},
};
