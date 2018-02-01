import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppStore from './store/AppStore';
import NavBar from './components/NavBar';
import ConnectedFacebookContent from './store/connectors/ConnectedFacebookContent';

/**
 * SocialStack App Container.
 * @returns {React.ReactNode} rendered app.
 */
const App = () => {
	const facebookLoggedIn = AppStore.getState().FacebookReducer.status === 'connected';

	return (
		<Provider store={AppStore}>
			<div style={{ minHeight: '100vh' }}>
				<NavBar />
				{facebookLoggedIn ? <ConnectedFacebookContent /> : null}
			</div>
		</Provider>
	);
};

ReactDOM.render(<App />, global.document.getElementById('root'));
