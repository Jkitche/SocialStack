import webpack from 'webpack';
import path from 'path';
import CompressionPlugin from 'compression-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

const ENV = process.env.NODE_ENV || 'development';

console.log('Building with environment ------->', ENV);

const ENV_TESTING = ENV === 'testing';
const ENV_COVERAGE = ENV === 'coverage';
const ENV_PRODUCTION = ENV === 'production';
const ENV_DEVELOPMENT = ENV === 'development';

const entry = {
	'social_stack.app': './App.js',
};

const outputPath = path.resolve(__dirname, './dist');
console.log(`Outputting files to: ${outputPath}`);
const output = {
	path: outputPath,
	publicPath: '/',
	filename: '[name].js',
	chunkFilename: '[name].[chunkhash].js',
};

const plugins = [
	new WriteFilePlugin(),
	new HtmlWebpackPlugin({
		template: 'index.template.ejs',
		inject: 'body',
	}),
	new FaviconsWebpackPlugin({
		logo: './images/favicon.png',
		inject: true,
		title: 'SocialStack',
		prefix: 'public/images/icons/',
	}),
];

// output gzips for production
if (ENV_PRODUCTION) {
	plugins.push(new CompressionPlugin({
		asset: '[file].gz[query]',
		algorithm: 'gzip',
		test: /\.(js|css)$/,
		threshold: 10240,
		minRatio: 0.8,
	}));

	plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false,
		},
	}));
}

// use cheap source maps when not in production
let devtool = false;
if (!ENV_PRODUCTION) {
	devtool = '#cheap-module-source-map';
} else {
	devtool = '#source-map';
}

// babel plugins
const babelPlugins = [];

// enforce types in dev and testing
if (ENV_DEVELOPMENT || ENV_TESTING || ENV_COVERAGE) {
	babelPlugins.push('typecheck');
}

plugins.push(new webpack.LoaderOptionsPlugin({
	options: {
		postcss: [
			require('autoprefixer'),
		],
	},
}));

export default {
	entry,
	output,
	plugins,
	devtool,
	target: 'web',
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
	externals: {
		'FB': 'FB',
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				include: [
					path.resolve(__dirname, './client'),
				],
				use: {
					loader: 'babel-loader',
					options: {
						// for hot loading and other fun stuff
						plugins: babelPlugins,
						cacheDirectory: '/tmp',
					},
				},
			},
			{
				test: /\.ini$/,
				use: ['json-loader', 'ini-loader'],
			},
			{
				test: /\.(gif|png|svg|ico)$/,
				use: {
					loader: 'url-loader',
					options: {
						'limit': 10000,
						'name': 'public/images/[name].[ext]',
					},
				},
			},
			{
				test: /\.(scss|css)$/,
				include: [
					path.resolve(__dirname, './client'),
				],
				exclude: [
					path.resolve(__dirname, './node_modules'),
				],
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
};
