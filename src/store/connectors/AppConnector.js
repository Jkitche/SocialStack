import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppStore from '../AppStore';
import App from '../../App';

/**
 * Connects Redux store to the App
 * @param {object} props Component props.
 * @return {React.ReactNode} rendered element.
 */
const ProvidedApp = (props) => {
	return (
		<Provider store={AppStore}>
			<App {...props} />
		</Provider>
	);
};

export default ProvidedApp;

ReactDOM.render(React.createElement(ProvidedApp), global.document.getElementById('root'));
