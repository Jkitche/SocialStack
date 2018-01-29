require('babel-core/register')({
	plugins: [
		'transform-es2015-modules-commonjs',
	],
});
module.exports = require('./webpack.config.babel');
