var webpack = require('webpack');

/* eslint-disable no-undef */
module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname,
		filename: '/src/bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: [
					'babel'
				],
				query: {
					presets: [
						'es2015'
					],
					
				}
			}
		]
	},
	plugins: [

		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
};
