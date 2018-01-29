import SSC from 'SSC';
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Button, Icon, Modal } from 'semantic-ui-react';

/**
 * Parses the response from Facebook
 * @param  {object} response Response Object.
 * @return {void}
 */
const responseFacebook = (response) => {
	console.log(response);
};

/**
 * Generates a trigger button
 * @return {React.ReactNode} Rendered button trigger
 */
const triggerButton = () => {
	return (
		<Button color="facebook">
			<Icon name="facebook" /> Facebook
		</Button>
	);
};

/**
 * Generates Facebook Login Modal
 * @return {React.ReactNode} Rendered Modal
 */
const FacebookLoginModal = () => {
	return (
		<Modal trigger={triggerButton()}>
			<Modal.Header>Login to Facebook</Modal.Header>
			<Modal.Content>
				<FacebookLogin
					appId={SSC.appId}
					autoLoad
					fields="name,email,picture"
					callback={responseFacebook}
				/>
			</Modal.Content>
		</Modal>
	);
};

export default FacebookLoginModal;
