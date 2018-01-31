import React from 'react';
import { Container, Menu, Image } from 'semantic-ui-react';
import ConnectedFacebookLogin from '../store/connectors/ConnectedFacebookLogin';
import favicon from '../../public/images/icons/favicon.png';

const NavBar = () => {
	return (
		<Menu pointing>
			<Container>
				<Menu.Item as="a" header>
					<Image
						size="mini"
						src={favicon}
						style={{ marginRight: 15 }}
					/>
					Social Stack
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item>
						<ConnectedFacebookLogin />
					</Menu.Item>
				</Menu.Menu>
			</Container>
		</Menu>
	);
};

export default NavBar;
