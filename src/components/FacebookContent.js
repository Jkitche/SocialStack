import React from 'react';
import PropTypes from 'prop-types';

/**
 * FacebookContent - Renders different facebook stats.
 * @param {object} props Component Properties. Mapped from Redux state.
 * @returns {React.ReactNode} rendered app.
 */
const FacebookContent = (props) => {
	FacebookContent.propTypes = {
		facebookMeta: PropTypes.object,
	};

	FacebookContent.defaultProps = {
		facebookMeta: {},
	};

	return (
		<div>
			Facebook!
		</div>
	);
};

export default FacebookContent;
