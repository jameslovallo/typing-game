const meta = {
	title: 'Learn to Type',
	description: 'Learning should be fun',
	layout: 'layout.njk',
}

module.exports = function (eleventyConfig) {
	Object.keys(meta).forEach((key) =>
		eleventyConfig.addGlobalData(key, meta[key])
	)
	eleventyConfig.addPassthroughCopy('src/**/*')
	return {
		dir: {
			input: 'pages',
			output: 'dist',
		},
	}
}
