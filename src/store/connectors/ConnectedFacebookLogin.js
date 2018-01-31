import { connect } from 'react-redux';
import FacebookLogin from '../../components/FacebookLogin';
import FacebookActions from '../actions/FacebookActions';

const ConnectedFacebookLogin = connect(
	state => ({
		status: state.FacebookReducer.status,
	}),
	dispatch => ({
		updateMetadata: (status, accessToken, expiresIn, signedRequest, userId) => {
			dispatch(FacebookActions.SET_METADATA(
				status,
				accessToken,
				expiresIn,
				signedRequest,
				userId,
			));
		},
	}),
)(FacebookLogin);

export default ConnectedFacebookLogin;
