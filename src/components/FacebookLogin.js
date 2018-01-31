import React from 'react';
import PropTypes from 'prop-types';
import { FacebookLogin as FBReactLogin } from 'react-facebook-login';
import FacebookStyles from './styles/facebook.scss';

/**
 * Generates Facebook Login Modal
 * @param {object} props Component properties.
 * @return {React.ReactNode} Rendered Modal
 */
const FacebookLogin = (props) => {
	FacebookLogin.propTypes = {
		status: PropTypes.string.isRequired,
		updateMetadata: PropTypes.func.isRequired,
	};

	/**
	 * Parses the response from Facebook
	 * @param  {object} response Response Object.
	 * @return {void}
	 */
	const responseFacebook = (response) => {
		const parsedResponse = JSON.parse(response);
		props.updateMetadata(
			parsedResponse.status,
			parsedResponse.accessToken,
			parsedResponse.expiresIn,
			parsedResponse.signedRequest,
			parsedResponse.userId,
		);
	};

	const logoutCallback = () => {
		global.FB.logout((response) => {
			const parsedResponse = JSON.parse(response);
			props.updateMetadata(
				parsedResponse.status,
				parsedResponse.accessToken,
				parsedResponse.expiresIn,
				parsedResponse.signedRequest,
				parsedResponse.userId,
			);
		});
	};

	const logoutButton = (
		<button
			onClick={logoutCallback}
			className={FacebookStyles.facebook_button}
		>
			Facebook Logout
		</button>
	);

	return (
		<span>
			{props.status === 'connected'
				? { logoutButton }
				: <FBReactLogin
					appId={global.SSC.appId}
					autoLoad
					fields="name,email,picture"
					callback={responseFacebook}
					cssClass={FacebookStyles.facebook_button}
				/>
			}
		</span>
	);
};

export default FacebookLogin;
