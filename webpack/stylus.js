module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
					test: /\.styl$/,
					include: paths,
					loaders: 'style-loader!css-loader!stylus-loader',
				},
                {
					test: /\.css$/,
					include: paths,
					loaders: 'style-loader!css-loader',
				}
            ]
        }
    };
};