import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppStore from './store/AppStore';
import NavBar from './components/NavBar';
import ConnectedFacebookContent from './store/connectors/ConnectedFacebookContent';

/**
 * SocialStack App Container.
 * @param {object} props Component Properties. Mapped from Redux state.
 * @returns {React.ReactNode} rendered app.
 */
const App = (props) => {
	App.propTypes = {
		facebookLoggedIn: PropTypes.bool,
	};

	App.defaultProps = {
		facebookLoggedIn: false,
	};

	return (
		<Provider store={AppStore}>
			<div style={{ minHeight: '100vh' }}>
				<NavBar />
				{props.facebookLoggedIn ? <ConnectedFacebookContent /> : null}
			</div>
		</Provider>
	);
};

ReactDOM.render(React.createElement(App), global.document.getElementById('root'));
