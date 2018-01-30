import SSC from 'SSC';
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import FacebookStyles from './styles/facebook.scss';

/**
 * Parses the response from Facebook
 * @param  {object} response Response Object.
 * @return {void}
 */
const responseFacebook = (response) => {
	console.log(response);
};

/**
 * Generates Facebook Login Modal
 * @return {React.ReactNode} Rendered Modal
 */
const FacebookController = () => {
	return (
		<FacebookLogin
			appId={SSC.appId}
			autoLoad
			fields="name,email,picture"
			callback={responseFacebook}
			cssClass={FacebookStyles.facebook_button}
		/>
	);
};

export default FacebookController;
