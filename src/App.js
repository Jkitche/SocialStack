import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Route, HashRouter } from 'react-router-dom';
import { Container, Segment, Menu, Icon } from 'semantic-ui-react';
import { HomePage } from './views/pages/HomePage';

const App = () => {
	return (
		<HashRouter>
			<div>
				<Menu pointing>
					<Container>
						<Menu.Item as="a" header>
							Social Stack
						</Menu.Item>
					</Container>
					<NavLink to="/">
						<Menu.Item
							name="home"
							active={this.state.activeItem === 'home'}
							onClick={this.handleItemClick}
							as="span"
							style={{ height: '100%' }}
						>
							<Icon name="home" />
							Home
						</Menu.Item>
					</NavLink>
				</Menu>
				<Segment basic>
					<Route exact path="/" component={HomePage} />
				</Segment>
			</div>
		</HashRouter>
	);
};

ReactDOM.render(<App />, global.document.getElementById('root'));
