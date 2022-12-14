const path = require('path')
const { ROOT_PATH } = require('../constant')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: path.resolve(ROOT_PATH, './src/index.tsx')
	},
	resolve: {
		alias: {
			'@/assets': path.resolve(ROOT_PATH, './src/assets'),
			'@/components': path.resolve(ROOT_PATH, './src/components'),
			'@/global': path.resolve(ROOT_PATH, './src/global'),
			'@/layouts': path.resolve(ROOT_PATH, './src/layouts'),
			'@/redux': path.resolve(ROOT_PATH, './src/redux'),
			'@/pages': path.resolve(ROOT_PATH, './src/pages'),
			'@/router': path.resolve(ROOT_PATH, './src/router'),
			'@/typings': path.resolve(ROOT_PATH, './src/typings'),
			'@/utils': path.resolve(ROOT_PATH, './src/utils')
		},
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
	},
	module: {
		rules: [
			{
				test: [/\.avif$/],
				type: 'asset',
				mimetype: 'image/avif',
				parser: {
					dataUrlCondition: {
						maxSize: 4 * 1024
					}
				}
			},
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 4 * 1024
					}
				}
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: require.resolve('@svgr/webpack'),
						options: {
							prettier: false,
							svgo: false,
							svgoConfig: {
								plugins: [{ removeViewBox: false }]
							},
							titleProp: true,
							ref: true
						}
					},
					{
						loader: require.resolve('file-loader'),
						options: {
							name: 'static/media/[name].[hash].[ext]'
						}
					}
				],
				issuer: {
					and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
				}
			},
			{
				test: /\.(eot|ttf|woff|woff2?)$/,
				type: 'asset/resource'
			},
			{
				test: /\.(tsx?|js)$/,
				loader: 'babel-loader',
				options: { cacheDirectory: true },
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true
							}
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: path.resolve(ROOT_PATH, './public/index.html')
		})
	]
}
