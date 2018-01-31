// All actions must follow FSA Standard: https://github.com/acdlite/flux-standard-action

export const METADATA = 'SET_METADATA';

export default {
	SET_METADATA: (status, accessToken, expiresIn, signedRequest, userId) => {
		return {
			type: METADATA,
			payload: {
				status,
				accessToken,
				expiresIn,
				signedRequest,
				userId,
			},
		};
	},
};
