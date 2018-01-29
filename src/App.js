import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import { Container, Segment, Menu, Image } from 'semantic-ui-react';
import HomePage from './views/pages/HomePage';
import FacebookLoginModal from './views/components/FacebookLoginModal';
import favicon from '../public/images/icons/favicon.png';

const App = () => {
	return (
		<HashRouter>
			<div>
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
								<FacebookLoginModal	/>
							</Menu.Item>
						</Menu.Menu>
					</Container>
				</Menu>
				<Segment basic>
					<Route exact path="/" component={HomePage} />
				</Segment>
			</div>
		</HashRouter>
	);
};

ReactDOM.render(<App />, global.document.getElementById('root'));
