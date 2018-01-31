import { connect } from 'react-redux';
import FacebookContent from '../../components/FacebookContent';

const ConnectedFacebookContent = connect(
	state => ({
		fbMetadata: state.FacebookReducer.metadata,
	}),
	dispatch => ({
	}),
)(FacebookContent);

export default ConnectedFacebookContent;
